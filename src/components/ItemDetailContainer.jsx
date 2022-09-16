import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";
import productos from "../utils/productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { idItem} = useParams();

  const onAdd = (cantidad) => {
    alert("Has seleccionado " + cantidad + " items");
  };

  useEffect(() => {
    customFetch(2000, productos.find(item => item.id == idItem))
      .then((productos) => setData(productos))
      .catch((err) => console.log(err))
  }, [idItem]);

  return (
    <>
      <ItemDetail {...data} />
      <ItemCount stock={5} inicial={1} onAdd={onAdd} />
    </>
  );
};

export default ItemDetailContainer;
