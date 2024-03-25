const Schema = require('mongoose').Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
<<<<<<< HEAD:models/bookSchema.js
  image,
=======
  emoji: String,
  imageUrl: [String],
>>>>>>> 393ea02949320f3b24a4a954e37dbb06d868f01b:models/itemSchema.js
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = bookSchema;
