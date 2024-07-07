const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();

/* DATABASE */
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
.then (() => console.log('Database connected!'))

require('dotenv').config();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));