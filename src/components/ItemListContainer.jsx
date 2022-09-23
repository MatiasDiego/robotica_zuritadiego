import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import productos from "../utils/productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    console.log(idCategory);
    if (idCategory) {
      customFetch(
        500,
        productos.filter((item) => item.idCategory == idCategory)
      )
        .then((productos) => setData(productos))
        .catch((err) => console.log(err));
    } else {
      customFetch(500, productos)
        .then((productos) => setData(productos))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <>
      <ItemList items={data} />
    </>
  );
};

export default ItemListContainer;
