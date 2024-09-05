const express = require('express');
const { updateProfile, getProfile, getProfileBYId } = require('../controllers/profileController');
const { verifyToken } = require('../auth/auth');

const router = express.Router();

router.post('/profile', verifyToken, updateProfile);
router.get('/profile', verifyToken, getProfile);
router.get('/profile/:id', getProfileBYId);

module.exports = router;
