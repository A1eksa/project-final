import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/project-final';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set('useCreateIndex', true); //added due to deprecation error 26868
mongoose.Promise = Promise;

// ******** Schemas ******** //
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
});

const TodoSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['home', 'work', 'family', 'friends'],
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const HabitSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    trim: true,
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

// ******** Models ******** //
const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);
const Habit = mongoose.model('Habit', HabitSchema);

// ******** Defined Port ******** //
const port = process.env.PORT || 8080;
const app = express();

// ******** Middlewear ******** //
app.use(cors());
app.use(express.json());

// ******** Authentication function ******** //
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');

  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ response: 'Please log in', success: false });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

// ******** ENDPOINTS ******** //

// ******** POST method signup ******** //
app.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Password must be at least 5 charachters';
    }

    const newUser = await new User({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
});

// ******** POST method signin ******** //
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          username: user.username,
          accessToken: user.accessToken,
        },
        success: true,
      });
    } else {
      res
        .status(404)
        .json({ message: 'Username or password is incorrect', success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
});

// ******** POST method todo ******** //
app.post('/todos', authenticateUser);
app.post('/todos', async (req, res) => {
  const { heading, message, category, user } = req.body;

  try {
    const newTodo = await new Todo({
      heading,
      message,
      category,
      user: req.user,
    }).save();
    res.status(201).json({ response: newTodo, success: true });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
});

// ******** GET method todos ******** //
// app.get('/todos', async (req, res) => {
//   const todos = await Todo.find({}).sort({ createdAt: 'desc' });
//   res.status(201).json({ response: todos, success: true });
// });

// ******** GET method user todos ******** //
app.get('/todos/:userId', authenticateUser);
app.get('/todos/:userId', async (req, res) => {
  const { userId } = req.params;

  const todos = await Todo.find({ user: userId });
  res.status(201).json({ response: todos, success: true });
});

// ******** POST method habit ******** //
app.post('/habits', authenticateUser);
app.post('/habits', async (req, res) => {
  const { heading, description, user } = req.body;

  try {
    const newHabit = await new Habit({
      heading,
      description,
      user: req.user,
    }).save();
    res.status(201).json({ response: newHabit, success: true });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
});

// ******** GET method habits ******** //
app.get('/habits/:userId', authenticateUser);
app.get('/habits/:userId', async (req, res) => {
  const habits = await Habit.find({}).sort({ createdAt: 'desc' });

  res.status(201).json({ response: habits, succes: true });
});

// ******** Start server ******** //
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
