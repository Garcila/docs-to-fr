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
      console.log('zapato ', newWord);
      res.json(newWord);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

// router.get('/api/word', (req, res) => {
//   Words.aggregate([
//     {
//       $addFields: {
//         totalDuration: {
//           $sum: '$exercises.duration',
//         },
//       },
//     },
//   ])
//     .then((dbWordss) => {
//       res.json(dbWordss);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.get('/api/words/range', (req, res) => {
//   Words.aggregate([
//     {
//       $addFields: {
//         totalDuration: {
//           $sum: '$exercises.duration',
//         },
//       },
//     },
//   ])
//     .sort({_id: -1})
//     .limit(7)
//     .then((dbWordss) => {
//       console.log(dbWordss);
//       res.json(dbWordss);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.delete('/api/words', ({body}, res) => {
//   Words.findByIdAndDelete(body.id)
//     .then(() => {
//       res.json(true);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.put('/api/words/:id', ({body, params}, res) => {
//   Words.findByIdAndUpdate(
//     params.id,
//     {$push: {exercises: body}},
//     // "runValidators" will ensure new exercises meet our schema requirements
//     {new: true, runValidators: true}
//   )
//     .then((dbWords) => {
//       res.json(dbWords);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
