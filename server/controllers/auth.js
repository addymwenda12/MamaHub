const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");
const Users = require('../model/users')

require("dotenv").config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const passwordReq = [
  "at least one uppercase letter",
  "at least one lowercase letter",
  "at least one digit",
  "at least one special character(@,*,#,%,-,$,+,!)",
  "at least 8 characters",
];

const signup = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  const currentDate = new Date()

  //validation of values
  if (!isValidEmail(email)) {
    return res
      .status(404)
      .json({ message: ["email is not valid.Please try again"] });
  }
  if (password !== confirmPassword) {
    return res.status(404).json({ message: ["passwords do not match"] });
  }
  if (!isValidPassword(password)) {
    return res.status(404).json({ message: passwordReq });
  }

  try {
    //check if the user exists in the database
    const existsingUser = await Users.findOne({ email: email });

    if (existsingUser) {
      return res.status(404).json({ message: ["email already taken"] });
    }

    //create a random userID
    const userId = crypto.randomBytes(16).toString("hex");
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user in database
    const newUser = new Users({
      userId,
      email,
      password: hashedPassword,
      date: currentDate,
    });
    try {
      await newUser.save();
    } catch (err) {
      console.log(e);
      return res
        .status(500)
        .json({ message: ["unable to save user to database"] });
    }

    const serverClient = connect(api_key, api_secret, app_id);

    const token = serverClient.createUserToken(userId);

    res.status(200).json({ token, userId, email, hashedPassword });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: ["unable to create user"] });
  }
};

const createProfile = async (req, res) => {
  const { avatar, name, date, bio, gender, userId } = req.body;

  try {
    const client = StreamChat.getInstance(api_key, api_secret);
    const updateToken = crypto.randomBytes(16).toString("hex");

    //update user info in database
    const updateUser = await Users.updateOne(
        { userId },
        {
          $set: {
            avatar,
            name,
            dateOfBirth: date,
            bio,
            gender,
            profileToken: updateToken,
          },
        }
      );
  
      if (updateUser.matchedCount === 0) {
        return res.status(404).json({ message: ["User not found"] });
      }

    //update stream user database
    const update = {
      id: userId,
      set: {
        avatar: avatar,
        name: name,
        DateOfBirth: date,
        bio: bio,
        gender: gender,
        profileToken: updateToken,
      },
    };

    const response = await client.partialUpdateUser(update);

    const updatedUser = response.users[userId];
    const profileToken = updatedUser.profileToken;

    res.status(200).json({ ...updatedUser, avatar, name, profileToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Failed to update profile"] });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check if user exists in the database
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: ["user does  not exist"] });
    }

    const serverClient = connect(api_key, api_secret, app_id);
    const client = StreamChat.getInstance(api_key, api_secret);

    const { users } = await client.queryUsers({ email: email });

    if (!users.length)
      return res.status(400).json({ message: ["User not found"] });

    const success = await bcrypt.compare(password, users[0].hashedPassword);
    console.log(users[0]);

    const { id, profileToken, avatar } = users[0];

    //check if the user has the following properties so as to determine if the user has created their profile
    if (users[0].hasOwnProperty("name" || "bio" || "avatar")) {
      const token = serverClient.createUserToken(users[0].id);

      if (success) {
        res.status(200).json({
          token,
          userId: id,
          profileToken: profileToken,
          email: users[0].email,
          avatar: avatar,
        });
      } else {
        res.status(500).json({ message: ["Incorrect password"] });
      }
    } else {
      res
        .status(400)
        .json({ message: ["Must create profile first before logging in"] });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

//VALIDATION FUNCTIONS

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate password format
function isValidPassword(password) {
  // const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*#%-$+!])[a-zA-Z\d@*#%-$+!]{8,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
  return passwordRegex.test(password);
}

module.exports = { signup, login, createProfile };
