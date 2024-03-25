require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Historical fiction', sortOrder: 10},
    {name: 'Fantasy', sortOrder: 20},
    {name: 'Mystery', sortOrder: 30},
    {name: 'Family saga', sortOrder: 40},
    {name: 'Adventure', sortOrder: 50},
    {name: 'Novel', sortOrder: 60},
    {name: 'Childrens literature', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'A Tale of Two Cities', imageUrl: ['https://cdn.kobo.com/book-images/b6cc787d-79b3-4322-bfae-7bbf6ed59a77/1200/1200/False/a-tale-of-two-cities-431.jpg'], category: categories[0], price: 39.99},
    {name: 'The Kite Runner', imageUrl: ['https://m.media-amazon.com/images/I/81IzbD2IiIL._AC_UF1000,1000_QL80_.jpg'], category: categories[0], price: 38.60},
    {name: 'The Little Prince (Le Petit Prince)', imageUrl: ['https://m.media-amazon.com/images/I/61NGp-UxolL._AC_UF1000,1000_QL80_.jpg'], category: categories[1], price: 22.95},
    {name: 'Gone with the Wind', imageUrl: ['https://m.media-amazon.com/images/I/91w1IHrUqZL._AC_UF894,1000_QL80_.jpg'], category: categories[0], price: 35.95},
    {name: 'All the Light We Cannot See', imageUrl: ['https://m.media-amazon.com/images/I/81RBTG28sCL._AC_UF1000,1000_QL80_.jpg'], category: categories[0], price: 29.95},
    {name: 'The Pillars of the Earth', imageUrl: ['https://m.media-amazon.com/images/I/91L9e1rC1WL._AC_UF894,1000_QL80_.jpg'], category: categories[0], price: 27.00},
    {name: 'Harry Potter and the Philosophers Stone', imageUrl: ['https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg'], category: categories[1], price: 21.60},
    {name: 'The Hobbit', imageUrl: ['https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_.jpg'], category: categories[1], price: 71.90},
    {name: 'Watership Down', imageUrl: ['https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7221_v_v10_aa.jpg'], category: categories[1], price: 33.30},
    {name: 'Harry Potter and the Chamber of Secrets', imageUrl: ['https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg'], category: categories[1], price: 23.10},
    {name: 'And Then There Were None', imageUrl: ['https://agathachristie.imgix.net/hcuk-paperback/And-Then-There-Were-None.JPG?auto=compress,format&fit=clip&q=65&w=400'], category: categories[2], price: 21.20},
    {name: 'The Da Vinci Code', imageUrl: ['https://m.media-amazon.com/images/I/91p-Z1BLufL._AC_UF894,1000_QL80_.jpg'], category: categories[2], price: 36.50},
    {name: 'Angels & Demons', imageUrl: ['https://m.media-amazon.com/images/I/81adkKbGZgL._AC_UF1000,1000_QL80_.jpg'], category: categories[2], price: 39.30},
    {name: 'Where the Crawdads Sing', imageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7MtvG5awBuxhLKG3tZ7243blND57zv9iKw&usqp=CAU'], category: categories[2], price: 32.99},
    {name: 'Calico Cat Holmes series', imageUrl: ['https://m.media-amazon.com/images/I/71DgCY95ZwL._AC_UF1000,1000_QL80_.jpg'], category: categories[2], price: 81.50},
    {name: 'Dream of the Red Chamber', imageUrl: ['https://cdn.kobo.com/book-images/fdb1cd6c-89be-4cc5-b168-be851344a62c/1200/1200/False/dream-of-the-red-chamber-10.jpg'], category: categories[3], price: 35.30},
    {name: 'Flowers in the Attic', imageUrl: ['https://longriverreview.com/wp-content/uploads/2022/03/811d3zAinkL.jpeg'], category: categories[3], price: 67.95},
    {name: 'The Thorn Birds', imageUrl: ['https://images.thenile.io/r1000/9781844084470.jpg'], category: categories[3], price: 19.25},
    {name: 'She: A History of Adventure', imageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShw7wzM-LwmklRlBUD7QFLza6MPfMfO3ZoTMaIhmTZvPZLeCKlCB13vyXQCnnL1Rd7KIQ&usqp=CAU'], category: categories[4], price: 26.30},
    {name: 'The Adventures of Pinocchio (Le avventure di Pinocchio)', imageUrl: ['https://m.media-amazon.com/images/I/61zVBVdGafL._AC_UF1000,1000_QL80_.jpg'], category: categories[4], price: 45.00},
    {name: 'Catching Fire', imageUrl: ['https://m.media-amazon.com/images/I/71e9wjuvcJL._AC_UF1000,1000_QL80_.jpg'], category: categories[4], price: 30.00},
    {name: 'Lolita', imageUrl: ['https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19943_p_v10_ay.jpg'], category: categories[5], price: 26.95},
    {name: 'Anne of Green Gables', imageUrl: ['https://m.media-amazon.com/images/I/71mKX08j5OL._AC_UF894,1000_QL80_.jpg'], category: categories[5], price: 61.90},
    {name: 'The Name of the Rose (Il Nome della Rosa)', imageUrl: ['https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415375471i/119073.jpg'], category: categories[5], price: 50.95},
    {name: 'The Ginger Man', imageUrl: ['https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348768755i/127020.jpg'], category: categories[5], price: 24.95},
    {name: 'Sophies World (Sofies verden)', imageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPDdGD72JNEZmEgWdK55Fb2PFgSjIO21CD6DJkZb9AuF9MZvkIa7MsqYdBzxWNkylS2M&usqp=CAU'], category: categories[5], price: 26.95},
    {name: 'Mockingjay', imageUrl: ['https://www.bigw.com.au/medias/sys_master/images/images/h6d/h48/45352705818654.jpg'], category: categories[5], price: 15.95},
    {name: 'Adventures of Huckleberry Finn', imageUrl: ['https://cdn2.penguin.com.au/covers/400/9780099572978.jpg'], category: categories[5], price: 13.85},
    {name: 'Black Beauty', imageUrl: ['https://cdn2.penguin.com.au/covers/original/9781448188000.jpg'], category: categories[6], price: 25.40},
    {name: 'The Tale of Peter Rabbit', imageUrl: ['https://images.thenile.io/r1000/9780448435213.jpg'], category: categories[6], price: 31.95},
    {name: 'The Very Hungry Caterpillar', imageUrl: ['https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780140569322&w=&h=570'], category: categories[6], price: 10.60},
    {name: 'The Wind in the Willows', imageUrl: ['https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630642716i/5659.jpg'], category: categories[6], price: 14.99},
    {name: 'Love You Forever', imageUrl: ['https://m.media-amazon.com/images/I/810k-3rpXSL._AC_UF1000,1000_QL80_.jpg'], category: categories[6], price: 24.95},
  ]);

  console.log(items)

  process.exit();

})();
