import { useState, useEffect } from "react";
import customFetch from '../utils/customFetch';
import Item from "./Item";
import productos from '../utils/productos';


const ItemList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    customFetch(2000, productos)
      .then((productos) => setData(productos))
      .catch((err) => console.log("Hubo un error"));
  }, []);

  return (
    <div className="productosContainer">
      {data.length ? (
        data.map((producto) => (
          <Item
            key={producto.id}
            picture={producto.picture}
            title={producto.title}
            price={producto.price}
          />
        ))
      ) : (
        <p>Cargando productos....</p>
      )}
    </div>
  );
};

export default ItemList;