import './LineBook.css';

export default function LineBook({ lineBook, isPaid, handleChangeQty }) {
  return (
    <div className="LineBook">
      <div className="flex-ctr-ctr">{lineBook.book.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineBook.book.name}</span>
        <span>{lineBook.book.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineBook.book._id, lineBook.qty - 1)}
          >−</button>
        }
        <span>{lineBook.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineBook.book._id, lineBook.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineBook.extPrice.toFixed(2)}</div>
    </div>
  );
}