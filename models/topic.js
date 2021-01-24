const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  icon: String,
  description: String
})
 

module.exports = mongoose.model('Topic', topicSchema);