const express = require('express');
const { updateProfile, getProfile } = require('../controllers/profileController');
const { verifyToken } = require('../auth/auth');

const router = express.Router();

router.post('/profile', verifyToken, updateProfile);
router.get('/profile', verifyToken, getProfile);

module.exports = router;
