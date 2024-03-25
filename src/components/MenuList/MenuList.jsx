import './MenuList.css';
import MenuListBook from '../MenuListBook/MenuListBook';

export default function MenuList({ menuBooks, handleAddToOrder }) {
  const books = menuBooks.map(book =>
    <MenuListBook
      key={book._id}
      menuBook={book}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {books}
    </main>
  );
}