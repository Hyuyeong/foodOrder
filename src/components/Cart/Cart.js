import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
  const cartCtx = useContext(CartContext);

  // console.log(cartCtx);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(1)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className="cart__items">
      {cartCtx.items.map(item => (
        <li>
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            img={item.img}
            name={item.name}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className="cart__total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="cart__buttons">
        <button onClick={props.onHideCart} className="btn__close">
          Close
        </button>
        {hasItems && <button className="btn__order">Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
