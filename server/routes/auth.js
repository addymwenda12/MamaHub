const express = require('express');

const { signup, login, createProfile, createGroup,search, getAllGroupsJoined, getAllGroups } = require('../controllers/auth.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/create-profile',createProfile)
router.post('/create-group',createGroup)
router.get('/search-users',search)
router.get('/get-groups',getAllGroupsJoined)
router.get('/all-groups',getAllGroups)

module.exports = router;