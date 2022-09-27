import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import productos from "../utils/productos";


const ItemDetailContainer = () => {
  const [ data, setData ] = useState({});
  //TOMA EL ID DE LA URL - EN ESTE CASO idItem DEBE SER IGUAL A idCategory DEL ARCHIVO JSON DE PRODUCTOS
  const { idItem } = useParams();

  useEffect(() => {
    customFetch(500, productos.find(item => item.id == idItem))
      .then((productos) => setData(productos))
      .catch((err) => console.log(err))
  }, []);


  return (
    <>
      <ItemDetail item={data} />
    </>
  );
};

export default ItemDetailContainer;
