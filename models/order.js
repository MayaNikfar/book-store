const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = require('./bookSchema');

const lineBookSchema = new Schema({
  qty: { type: Number, default: 1 },
  book: bookSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineBookSchema.virtual('extPrice').get(function() {
  // 'this' keyword is bound to the lineBook document
  return this.qty * this.book.price;
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineBooks: [lineBookSchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineBooks.reduce((total, Book) => total + Book.extPrice, 0);
});

orderSchema.virtual('orderQty').get(function() {
  return this.lineBooks.reduce((total, book) => total + book.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    // query object
    { user: userId, isPaid: false },
    // update doc - provides values when inserting
    { user: userId },
    // upsert option
    { upsert: true, new: true }
  );
};

// Instance method for adding an book to a cart (unpaid order)
orderSchema.methods.addBookToCart = async function (bookId) {
  // 'this' keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the book already exists in the cart
  const lineBook = cart.lineBooks.find(lineBook => lineBook.book._id.equals(bookId));
  if (lineBook) {
    // It already exists, so increase the qty
    lineBook.qty += 1;
  } else {
    // Get the book from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    const Book = mongoose.model('Book');
    const book = await Book.findById(bookId);
    // The qty of the new lineBook object being pushed in defaults to 1
    cart.lineBooks.push({ book });
  }
  // return the save() method's promise
  return cart.save();
};

// Instance method to set an book's qty in the cart
orderSchema.methods.setBookQty = function(bookId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line book in the cart for the menu book
  const lineBook = cart.lineBooks.find(lineBook => lineBook.book._id.equals(bookId));
  if (lineBook && newQty <= 0) {
    // Calling deleteOne, removes the lineBook subdoc from the cart.lineBooks array
    lineBook.deleteOne();
  } else if (lineBook) {
    // Set the new qty - positive value is assured thanks to prev if
    lineBook.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);
