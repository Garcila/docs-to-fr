const mongoose = require('mongoose');
const random = require('mongoose-simple-random');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  classe: {
    type: String,
    default: 'verbe',
    trim: true,
    required: 'Entrer dans une classe',
    lowercase: true,
  },
  mot: {
    type: String,
    trim: true,
    required: 'Entrez un mot',
    lowercase: true,
  },
  je: {
    type: String,
    trim: true,
    lowercase: true,
  },
  tu: {
    type: String,
    trim: true,
    lowercase: true,
  },
  ill_elle: {
    type: String,
    trim: true,
    lowercase: true,
  },
  nous: {
    type: String,
    trim: true,
    lowercase: true,
  },
  vous: {
    type: String,
    trim: true,
    lowercase: true,
  },
  ills_elles: {
    type: String,
    trim: true,
    lowercase: true,
  },
  groupe: {
    type: Number,
    trim: true,
  },
  ajouter: {
    type: String,
    trim: true,
    lowercase: true,
  },
  fin: {
    type: String,
    trim: true,
    lowercase: true,
  },
});

wordSchema.plugin(random);

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
