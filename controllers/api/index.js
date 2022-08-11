const router = require('express').Router();
const templateRoutes = require('./templateRoutes');

router.use('/template', templateRoutes);

module.exports = router