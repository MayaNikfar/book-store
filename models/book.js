const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Book queries)
require('./category');
const bookSchema = require('./bookSchema');

module.exports = mongoose.model('Book', bookSchema);