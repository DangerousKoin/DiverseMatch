const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  service: String,
  contactInfo: String
})

module.exports = mongoose.model('Contact', contactSchema);