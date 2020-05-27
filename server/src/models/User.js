const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  profileImg: {
    type: String,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Post',
  },
});

module.exports = mongoose.model('User', UserSchema);
