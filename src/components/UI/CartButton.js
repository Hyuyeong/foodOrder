import CartIcon from './CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartButton = props => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  return (
    <div onClick={props.onClick} className="btn__cart">
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </div>
  );
};
export default CartButton;
