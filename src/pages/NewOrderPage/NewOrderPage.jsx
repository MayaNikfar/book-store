import { useState, useEffect, useRef } from 'react';
import * as booksAPI from '../../utilities/books-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuBooks, setMenuBooks] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getBooks() {
      const books = await booksAPI.getAll();
      categoriesRef.current = [...new Set(books.map(book => book.category.name))];
      setMenuBooks(books);
      setActiveCat(categoriesRef.current[0]);
    }
    getBooks();

    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(bookId) {
    // 1. Call the addBookToCart function in ordersAPI, passing to it the bookId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addBookToCart(bookId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  async function handleChangeQty(bookId, newQty) {
    const updatedCart = await ordersAPI.setBookQtyInCart(bookId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }


  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuBooks={menuBooks.filter(book => book.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}