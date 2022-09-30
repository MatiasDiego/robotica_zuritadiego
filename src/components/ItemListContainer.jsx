/* 
  PRIMERA PANTALLA QUE CARGA NUESTRO ECOMMERCE 
  DONDE SE MUESTRA LA GRILLA DE PRODUCTOS
*/

import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { firestoreFetch } from "../utils/firestoreFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
        .then(result => setData(result))
        .catch(err => console.log(err));
  }, [idCategory]);

  useEffect(() => {
    return () => {
      setData([]);
    };
  }, []);

  return (
    <>
      <ItemList items={data} />
    </>
  );
};

export default ItemListContainer;