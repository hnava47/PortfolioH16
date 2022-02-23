const router = require('express').Router();
const emailRoutes = require('./emailRoutes');
const { portfolioPage } = require('../controllers/userController');

router.use('/email', emailRoutes);

router.get('/', portfolioPage);

module.exports = router;
