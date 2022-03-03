const router = require('express').Router();
const { sendEmail } = require('../../../controllers/userController');

router.post('/', sendEmail);

module.exports = router;
