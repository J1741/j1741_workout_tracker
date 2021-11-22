const router = require('express').Router();

// add api routes - controllers separate?
router.get('/test', (req, res) => {
  console.log("in test api get route!")
  res.send('hello there!');
})

module.exports = router;