const Order = require('../../models/order');
// const Book = require('../../models/book');

module.exports = {
  cart,
  addToCart,
  setBookmQtyInCart,
  checkout,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an book to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addBookToCart(req.params.id);
  res.json(cart);
}

// Updates an book's qty in the cart
async function setBookQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setBookQty(req.body.bookId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
