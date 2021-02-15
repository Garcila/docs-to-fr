const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/new_word.html'));
});

module.exports = router;
