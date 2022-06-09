import { useState, useRef } from 'react';
//import styles from './Checkout.module.css'

const isEmpty = value => value.trim() === '';
const isPostalNumber = value => value.trim().length === 4;

const Checkout = props => {
  const inputNameRef = useRef();
  const inputStreetRef = useRef();
  const inputCityRef = useRef();
  const inputPostalRef = useRef();

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const submitHandler = e => {
    e.preventDefault();

    const inputCity = inputCityRef.current.value;
    const inputName = inputNameRef.current.value;
    const inputStreet = inputStreetRef.current.value;
    const inputPostal = inputPostalRef.current.value;

    const inputCityIsValid = !isEmpty(inputCity);
    const inputNameIsValid = !isEmpty(inputName);
    const inputStreetIsValid = !isEmpty(inputStreet);
    const inputPostaIsValid = isPostalNumber(inputPostal);

    setFormInputValidity({
      name: inputNameIsValid,
      street: inputStreetIsValid,
      postal: inputPostaIsValid,
      city: inputCityIsValid,
    });

    const formIsVaild =
      inputCityIsValid &&
      inputNameIsValid &&
      inputPostaIsValid &&
      inputStreetIsValid;

    if (!formIsVaild) {
      return;
    }

    props.onConfirm({
      name: inputName,
      street: inputStreet,
      postal: inputPostal,
      city: inputCity,
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="checkout__control">
        <label htmlFor="name">Name</label>
        <input ref={inputNameRef} type="text" id="name" />
        {!formInputValidity.name && (
          <p className="checkout__control__message">Please fill out the form</p>
        )}
      </div>
      <div className="checkout__control">
        <label htmlFor="street">Street</label>
        <input ref={inputStreetRef} type="text" id="street" />
        {!formInputValidity.street && (
          <p className="checkout__control__message">Please fill out the form</p>
        )}
      </div>
      <div className="checkout__control">
        <label htmlFor="postal">Postal</label>
        <input ref={inputPostalRef} type="text" id="postal" />
        {!formInputValidity.postal && (
          <p className="checkout__control__message">It should be four number</p>
        )}
      </div>
      <div className="checkout__control">
        <label htmlFor="city">City</label>
        <input ref={inputCityRef} type="text" id="city" />
        {!formInputValidity.city && (
          <p className="checkout__control__message">Please fill out the form</p>
        )}
      </div>

      <div className="checkout__button">
        <button
          className="checkout__button-cancel"
          onClick={props.onHideCart}
          type="button"
        >
          Cancel
        </button>
        <button className="checkout__button-confirm" type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};
export default Checkout;
