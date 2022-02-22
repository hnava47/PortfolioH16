const router = require('express').Router();
const { portfolioPage } = require('../controllers/userController');

router.get('/', portfolioPage);

module.exports = router;
