const express = require('express');
const { registerUser, loginUser, getUsers,verifyOTP} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', protect, admin, getUsers);
router.post('/verify-otp', verifyOTP);
module.exports = router;
