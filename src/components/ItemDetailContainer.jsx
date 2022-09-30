import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [ data, setData ] = useState({});
  //TOMA EL ID DE LA URL - EN ESTE CASO idItem DEBE SER IGUAL A idCategory DEL ARCHIVO JSON DE PRODUCTOS
  const { idItem } = useParams();

  useEffect(() => {
    (async function() {
      const docRef = doc(db, "products", idItem);
      const docSnap = await getDoc(docRef);
      
      if(docSnap.exists()) {
        return {
          id: idItem,
          ...docSnap.data()
        }
      } else {
        console.log("No such document!")
      }
      //setData(docSnap);
    })()
  }, [idItem]);


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