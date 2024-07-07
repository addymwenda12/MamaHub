const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
    try {
        const { email,password,confirmPassword } = req.body;

        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret, app_id);

        const hashedPassword = await bcrypt.hash(password, 10);

        const token = serverClient.createUserToken(userId);

        res.status(200).json({ token, userId, email,hashedPassword });
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};
const createProfile = async (req, res) => {
    try {
        const { avatar, name, date, bio, gender, userId } = req.body;

        const client = StreamChat.getInstance(api_key, api_secret);

        const update = {
            id: userId,
            set: {
                avatar:avatar,
                name:name,
                DateOfBirth: date,
                bio:bio,
                gender:gender,
                profileToken: crypto.randomBytes(16).toString('hex'),
            },
        };

        const response = await client.partialUpdateUser(update);
        const updatedUser = response.users[userId];
        const profileToken = updatedUser.profileToken

        res.status(200).json({ ...updatedUser ,avatar,name,profileToken});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to update profile' });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const serverClient = connect(api_key, api_secret, app_id);
        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ email: email });

        if(!users.length) return res.status(400).json({ message: 'User not found' });

        const success = await bcrypt.compare(password, users[0].hashedPassword);
        console.log(users[0])
        
        const {id,profileToken,avatar} = users[0]

        if(users[0].hasOwnProperty('name' || 'bio' || 'avatar')){
       
            const token = serverClient.createUserToken(users[0].id);

            if(success) {
                res.status(200).json({ token,userId: id,profileToken: profileToken,email:users[0].email,avatar:avatar});
            } else {
                res.status(500).json({ message: 'Incorrect password' });
            }
        }else{
            res.status(400).json({message:'Must create profile first before logging in'})
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

module.exports = { signup, login, createProfile }