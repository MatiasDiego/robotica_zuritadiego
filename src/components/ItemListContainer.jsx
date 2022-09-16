import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import customFetch from '../utils/customFetch';
import productos from '../utils/productos';

const ItemListContainer = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    customFetch(2000, productos)
      .then((productos) => setData(productos))
      .catch((err) => console.log("Hubo un error"));
  }, []);

  return (
    <>
      <ItemList items={data}/>
    </>
  );
};

export default ItemListContainer;
