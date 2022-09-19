import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({ stock = 0, inicial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  const handleClickPlus = () => {
    setCount(count + 1);
    if (count === stock) {
      setCount(count);
    }
  };

  const handleClickMinus = () => {
    setCount(count - 1);
    if (count === inicial) {
      setCount(count);
    }
  };

  return (
    <div className="bntContainer ms-5">
      <button className="btn btn-counter" onClick={handleClickMinus}>
        -
      </button>
      <div className="itemCount">
        <p>{count}</p>
      </div>
      <button className="btn btn-counter" onClick={handleClickPlus}>
        +
      </button>
      {stock && count ? (
        <button
          className="btn btn-counterAdd btnAgregar"
          onClick={() => onAdd(count)}
        >
          Agregar
        </button>
      ) : (
        <button className="btn btn-counterAdd btnAgregar" disabled>
          Agregar
        </button>
      )}
    </div>
  );
};

export default ItemCount;
