import Modal from '../UI/Modal';
import { Fragment, useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
  const cartCtx = useContext(CartContext);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  // console.log(cartCtx);
  const submitOrderHandler = async userData => {
    setIsSubmitting(true);
    await fetch(
      'https://foodorder-483ff-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const [isCheckout, setIsCheckout] = useState(false);
  const isCheckoutHandler = e => {
    setIsCheckout(true);
  };

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

  const modalActons = (
    <div className="cart__buttons">
      <button onClick={props.onHideCart} className="btn__close">
        Close
      </button>
      {hasItems && (
        <button onClick={isCheckoutHandler} className="btn__order">
          Order
        </button>
      )}
    </div>
  );

  const cardModalContent = (
    <Fragment>
      {cartItems}
      <div className="cart__total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onHideCart={props.onHideCart}
        />
      )}
      {!isCheckout && modalActons}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !didSubmit && cardModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};
export default Cart;
