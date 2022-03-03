const router = require('express').Router();
const messageRoutes = require('./messageRoutes');
const { portfolioPage } = require('../controllers/userController');

router.use('/message', messageRoutes);

router.get('/', portfolioPage);

module.exports = router;
