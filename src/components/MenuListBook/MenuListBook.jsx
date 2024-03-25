import './MenuListBook.css';

export default function MenuListBook({ menuBook, handleAddToOrder }) {
  return (
    <div className="MenuListBook">
      <img src={menuBook.imageUrl} className="book-image emoje"/>
      <div className="name">{menuBook.name}</div>
      <div className="buy">
        <span>${menuBook.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuBook._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}