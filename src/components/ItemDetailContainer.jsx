import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetchOne";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const [ data, setData ] = useState({});
  //TOMA EL ID DE LA URL - EN ESTE CASO idItem DEBE SER IGUAL A idCategory DEL ARCHIVO JSON DE PRODUCTOS
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
        .then(result => setData(result))
        .catch(err => console.log(err))
  }, []);

  return (
    <>
      <ItemDetail item={data} />
    </>
  );
};

export default ItemDetailContainer;

/*
import customFetch from "../utils/customFetch";
import productos from "../utils/productos";

customFetch(500, productos.find(item => item.id == idItem))
  .then((productos) => setData(productos))
  .catch((err) => console.log(err))
*/