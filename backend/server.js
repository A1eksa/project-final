import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/project-final';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set('useCreateIndex', true); //added due to deprecation error 26868
mongoose.Promise = Promise;

//Schemas

// Schema for database users
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

// Schema for database todos
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
    // required: true,
    ref: 'User',
  },
});

// Schema for database habits
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
});

// Model for database users
const User = mongoose.model('User', UserSchema);

//Model for todo's
const Todo = mongoose.model('Todo', TodoSchema);

//Model for habits
const Habit = mongoose.model('Habit', HabitSchema);

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

//Authentication--->
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');

  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      req.user = user;
      next(); // built in function for express that makes the app move along if there's for example an user
    } else {
      res.status(401).json({ response: 'Please log in', success: false });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

// ENDPOINTS

// POST method for signing up user with hashed password
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

// POST method for signing in user with hashed password

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

//POST method for adding Todo
app.post('/todos', authenticateUser);
app.post('/todos', async (req, res) => {
  const { heading, message, category, user } = req.body;

  try {
    // const queriedUser = await User.findById(user);
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

//GET method for Todos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: 'desc' });
  res.status(201).json({ response: todos, success: true });
});

//GET method to get todos of one user
app.get('/todos/:userId', authenticateUser);
app.get('/todos/:userId', async (req, res) => {
  const { userId } = req.params;

  const todos = await Todo.find({ user: userId });
  res.status(201).json({ response: todos, success: true });
});

//POST method for adding Habit
app.post('/habits', async (req, res) => {
  const { heading, description } = req.body;

  try {
    const newHabit = await new Habit({ heading, description }).save();
    res.status(201).json({ response: newHabit, success: true });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
});

//GET method for Habits
app.get('/habits', async (req, res) => {
  const habits = await Habit.find({}).sort({ createdAt: 'desc' });

  res.status(201).json({ response: habits, succes: true });
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
