import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/project-final';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set('useCreateIndex', true); //added due to deprecation error 26868
mongoose.Promise = Promise;

// Schema for database users
const userSchema = new mongoose.Schema({
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

// Model for database users
const User = mongoose.model('User', userSchema);

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Endpoints

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

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
