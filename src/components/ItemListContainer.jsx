/* 
  PRIMERA PANTALLA QUE CARGA NUESTRO ECOMMERCE 
  DONDE SE MUESTRA LA GRILLA DE PRODUCTOS
*/

import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { db } from "../utils/firebaseConfig";
import { query, collection, getDocs } from "@firebase/firestore";
// import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  // const { idCategory } = useParams();

  useEffect(() => {
    (async function() {
      const qry = query(collection(db, "products"));
      const querySnapshot = await getDocs(qry);
      const dataFromFirestore = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))
      setData(dataFromFirestore);
    })()
  }, [data]);

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


/*
import customFetch from "../utils/customFetch";
import productos from "../utils/productos";
*/

// useEffect(() => {
//   if (idCategory) {
//     customFetch(
//       500,
//       productos.filter((item) => item.idCategory == idCategory)
//     )
//       .then((productos) => setData(productos))
//       .catch((err) => console.log(err));
//   } else {
//     customFetch(500, productos)
//       .then((productos) => setData(productos))
//       .catch((err) => console.log(err));
//   }
// }, [idCategory]);