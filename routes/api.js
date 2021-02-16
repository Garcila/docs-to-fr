const router = require('express').Router();
const Word = require('../models/Word');

router.get('/api/word', (req, res) => {
  Word.findOneRandom(function (err, result) {
    if (!err) {
      res.json(result); // 1 element
    } else {
      console.log(err);
    }
  });
});
router.post('/api/add', ({body}, res) => {
  Word.create(body)
    .then((newWord) => {
      res.json(newWord);
    })
    .catch((err) => {
      res.json(err);
    });
});

// TODO implement update word
router.put('/api/words/:id', ({body, params}, res) => {
  Words.findByIdAndUpdate(params.id, {body}, {new: true, runValidators: true})
    .then((dbWords) => {
      res.json(dbWords);
    })
    .catch((err) => {
      res.json(err);
    });
});

// TODO: implement delete word
router.delete('/api/words', ({body}, res) => {
  Words.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
