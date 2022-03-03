const router = require('express').Router();
const { sendSMS } = require('../../../controllers/userController');

router.post('/', sendSMS);

module.exports = router;
