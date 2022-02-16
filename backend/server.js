import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { readFile } from 'fs/promises';

const thoughts = JSON.parse(
  await readFile(new URL('./thoughts.json', import.meta.url))
);

const mongoUrl =
  // process.env.MONGO_URL || 'https://aleksa-jessi-final-project.herokuapp.com';
  process.env.MONGO_URL || 'mongodb://localhost/project-final';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true); //added due to deprecation error 26868
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
    enum: ['Home', 'Work', 'Family', 'Friends'],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
  dueDate: {
    type: String,
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
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  regularity: {
    type: String,
    required: true,
    enum: ['once a day', 'every other day', 'once a week'],
  },
  length: {
    type: String,
    required: true,
    enum: ['30 days', '90 days', '6 months', '1 year'],
  },
  regularityNumber: {
    type: Number,
    required: true,
  },
  durationNumber: {
    type: Number,
    required: true,
  },
  incrementNumber: {
    type: Number,
  },
});

// ******** Models ******** //
const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);
const Habit = mongoose.model('Habit', HabitSchema);
const Quote = mongoose.model('Quote', {
  message: String,
  author: String,
});

if (process.env.RESET_DB) {
  const seedDatabase = async () => {
    await Quote.deleteMany({});

    thoughts.forEach((item) => {
      const newQuote = new Quote(item);
      newQuote.save();
    });
  };

  seedDatabase();
}

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

app.get('/quotes', async (req, res) => {
  const Quotes = await Quote.find({});
  const getRandomQuote = () =>
    Quotes[Math.floor(Math.random() * Quotes.length)];
  const random = getRandomQuote();
  res.status(200).json({
    response: random,
    success: true,
  });
});

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
  const { heading, message, category, user, dueDate } = req.body;

  try {
    const newTodo = await new Todo({
      heading,
      message,
      category,
      dueDate,
      user: req.user,
    }).save();
    res.status(201).json({ response: newTodo, success: true });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
});

// ******** GET method user todos ******** //
app.get('/todos/:userId', authenticateUser);
app.get('/todos/:userId', async (req, res) => {
  const { userId } = req.params;

  const todos = await Todo.find({ user: userId }).sort({ createdAt: 'desc' });
  res.status(201).json({ response: todos, success: true });
});

// ******** DELETE method todos ******** //
app.delete('/todos/:todoId', authenticateUser);
app.delete('/todos/:todoId', async (req, res) => {
  const { todoId } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete({ _id: todoId });
    if (deletedTodo) {
      res.status(200).json({ response: deletedTodo, success: true });
    } else {
      res.status(400).json({ message: 'todo not found', success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'could not delete todo', success: false });
  }
});

// ******** PATCH method todo ******** //
app.patch('/todos/:todoId', authenticateUser);
app.patch('/todos/:todoId/update', async (req, res) => {
  const { todoId } = req.params;

  try {
    const updatedTodo = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
      new: true,
    });
    if (updatedTodo) {
      res.status(200).json({ response: updatedTodo, success: true });
    } else {
      res.status(400).json({ message: 'todo not found', success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'could not update todo', success: false });
  }
});

// ******** PATCH method toggle completed ******** //
app.patch('/todo/:todoId/completed', async (req, res) => {
  const { todoId } = req.params;
  const { isCompleted } = req.body;

  try {
    const updateIsCompleted = await Todo.findOneAndUpdate(
      { _id: todoId },
      { isCompleted },
      { new: true }
    );
    res.status(200).json({ response: updateIsCompleted, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// ******** POST method habit ******** //
app.post('/habits', authenticateUser);
app.post('/habits', async (req, res) => {
  const {
    heading,
    description,
    user,
    regularity,
    length,
    regularityNumber,
    durationNumber,
  } = req.body;

  try {
    const newHabit = await new Habit({
      heading,
      description,
      user: req.user,
      regularity,
      length,
      regularityNumber,
      durationNumber,
      incrementNumber: 0,
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
  const { userId } = req.params;
  const habits = await Habit.find({ user: userId }).sort({ createdAt: 'desc' });

  res.status(201).json({ response: habits, success: true });
});

// ******** DELETE method habits ******** //

app.delete('/habits/:habitId', authenticateUser);
app.delete('/habits/:habitId', async (req, res) => {
  const { habitId } = req.params;

  try {
    const deletedHabit = await Habit.findByIdAndDelete({ _id: habitId });
    if (deletedHabit) {
      res.status(200).json({ response: deletedHabit, success: true });
    } else {
      res.status(400).json({ message: 'task not found', success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'could not delete habit', success: false });
  }
});

// ******** PATCH method habits ******** //
app.patch('/habits/:habitId', authenticateUser);
app.patch('/habits/:habitId/update', async (req, res) => {
  const { habitId } = req.params;
  const {
    heading,
    description,
    regularityNumber,
    durationNumber,
    length,
    regularity,
    incrementNumber,
  } = req.body;
  try {
    const updatedHabit = await Habit.findByIdAndUpdate(
      { _id: habitId },
      {
        description,
        heading,
        regularityNumber,
        durationNumber,
        length,
        regularity,
        incrementNumber,
      },
      { new: true }
    );
    if (updatedHabit) {
      res.status(200).json({ response: updatedHabit, success: true });
    } else {
      res.status(400).json({ message: 'habit not found', success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'could not update habit', success: false });
  }
});

// ******** PATCH method toggle completed ******** //
app.patch('/habits/:habitId/completed', async (req, res) => {
  const { habitId } = req.params;
  const { isCompleted } = req.body;

  try {
    const updateIsCompleted = await Habit.findOneAndUpdate(
      { _id: habitId },
      { isCompleted },
      { new: true }
    );
    res.status(200).json({ response: updateIsCompleted, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// ******** Start server ******** //
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
