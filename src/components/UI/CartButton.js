import CartIcon from './CartIcon';

const CartButton = props => {
  return (
    <div onClick={props.onClick} className="btn__cart">
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </div>
  );
};
export default CartButton;
