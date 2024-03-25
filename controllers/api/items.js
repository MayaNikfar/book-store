const Book = require('../../models/book');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const books = await Book.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the populated categories
  books.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(books);
}

async function show(req, res) {
  const book = await Book.findById(req.params.id);
  res.json(book);
}
