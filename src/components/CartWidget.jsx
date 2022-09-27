import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {

    const { cantItems } = useContext(CartContext);

  return (
    <>
      <button type="button" className="btn btn-cart position-relative">
        <i className="bi bi-cart" />
        <span badgecontext={cantItems()} className="position-absolute top-0 start-100 translate-middle badge rounded-circle">
          {cantItems()}
        </span>
      </button>
    </>
  );
};

export default CartWidget;
