const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('made it to template routes get')
})

module.exports = router