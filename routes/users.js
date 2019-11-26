const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

/* GET challenge 'you're so cool' listing. */
router.get('/cool', (req, res) => {
  res.send("You're so cool.");
});

module.exports = router;
