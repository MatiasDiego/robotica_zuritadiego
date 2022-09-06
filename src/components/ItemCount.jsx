import { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd}) => {
  const [count, setCount] = useState(inicial);

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
      <button className="btn btn-primary" onClick={handleClickMinus}>-</button>
      <p>{count}</p>
      <button className="btn btn-primary" onClick={handleClickPlus}>+</button>
      <button className="btn btn-success" onClick={onAdd}>Agregar</button>
    </div>
  );
};

export default ItemCount;
