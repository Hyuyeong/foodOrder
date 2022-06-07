import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = props => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(1)}`;

  const cartitems = (
    <ul className="cart__items">
      {cartCtx.items.map(item => (
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
        <span>{totalAmount}</span>
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
