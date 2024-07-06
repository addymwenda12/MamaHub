const express = require('express');

const { signup, login, createProfile } = require('../controllers/auth.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/create-profile',createProfile)

module.exports = router;