const Schema = require('mongoose').Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  image,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = bookSchema;
