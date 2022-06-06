import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div className="backdrop" onClick={props.onHideCart}></div>;
};

const ModalOverlay = props => {
  return (
    <div className="modal">
      <div className="modal__content">{props.children}</div>
    </div>
  );
};

const Modal = props => {
  const portalElement = document.getElementById('overlays');

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
