import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";
import productos from "../utils/productos";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const onAdd = (cantidad) => {
    alert("Has seleccionado " + cantidad + " items");
  };

  useEffect(() => {
    customFetch(2000, productos[0])
      .then((productos) => setData(productos))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail {...data} />
      <ItemCount stock={5} inicial={1} onAdd={onAdd} />
    </>
  );
};

export default ItemDetailContainer;
