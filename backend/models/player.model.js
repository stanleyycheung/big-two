const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  host: {
    type: Boolean,
  }
}, {
  timestamps: true,
});

const Player = mongoose.model('User', playerSchema);

module.exports = Player;