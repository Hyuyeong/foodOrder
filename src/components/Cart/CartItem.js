import { Fragment } from 'react';

const CartItem = props => {
  const price = `$${props.price.toFixed(1)}`;

  return (
    <Fragment>
      <div className="cart__item">
        <img src={props.img} alt="" />
        <div className="cart__detail">
          {props.name}
          <div className="cart__summary">
            <span className="cart__price">{price}</span>
            <span className="cart__amount"> x {props.amount}</span>
          </div>
        </div>
      </div>
      <div className="cart__actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </Fragment>
  );
};

export default CartItem;
