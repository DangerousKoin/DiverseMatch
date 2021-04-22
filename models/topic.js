const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: { type: String, unique: true },
  icon: String,
  description: String
})

module.exports = mongoose.model('Topic', topicSchema);