import './OrderDetail.css';
import LineBook from '../LineBook/LineBook';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineBooks = order.lineBooks.map(book =>
    <LineBook
      lineBook={book}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={book._id}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-book-container flex-ctr-ctr flex-col scroll-y">
        {lineBooks.length ?
          <>
            {lineBooks}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineBooks.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className=""></div>
        }
      </div>
    </div>
  );
}