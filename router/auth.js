const { Router } = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();

//Register
router.post('/register', createUser);

//Register
router.post('/login', loginUser);

router.get('/refreshToken', renewToken)



module.exports = router;