import Modal from '../UI/Modal';

const Cart = props => {
  const cartitems = (
    <ul className="cart__items">
      {[
        {
          id: 'm1',
          name: 'sushi',
          amount: 2,
          price: 12.99,
          img: 'https://d2vwsr3mua7yp8.cloudfront.net/78ae7879-0e8e-4594-9fbc-1040fce8d6f2_d3.jpg',
        },
      ].map(item => (
        <li>
          <img src={item.img} alt="" />
          {item.name}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartitems}
      <div className="cart__total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="cart__action">
        <button onClick={props.onHideCart} className="btn__close">
          Close
        </button>
        <button className="btn__order">Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
