const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: String,
  icon: String,
  description: String,
})
 

module.exports = mongoose.model('Topic', topicSchema);