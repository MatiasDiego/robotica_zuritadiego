import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const context = useContext(CartContext);

  console.log(item);
  console.log(`El id es: ${item.id}`);
  console.log(`El title es: ${item.title}`);

  const onAdd = (cantidad) => {
    alert("Has seleccionado " + cantidad + " items");
    setItemCount(cantidad);
    context.addItem(item, cantidad);
  };

  return (
    <>
      <div className="card mb-3 itemdetail_container">
        <div className="row">
          {/* COLUMNA DE IMAGEN */}
          <div className="col-md-4">
            <img
              src={item.picture}
              className="img-fluid rounded-start"
              alt="Robot"
            />
          </div>
          {/* COLUMNA DETALLES DE PRODUCTO */}
          <div className="col-md-8 col_itemdetail rounded-end">
            <div>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text description_itemdetail">{item.description}</p>
              <p className="price_itemdetail">$ {item.price}</p>
              <p className="card-text">
                <small className="text-muted">{item.stock} unidades en stock</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="itemCountContainer">
        {itemCount === 0 ? (
          <ItemCount stock={item.stock} inicial={itemCount} onAdd={onAdd} />
        ) : (
          <Link to="/carrito">
            <button className="btn btn-details">Ir Al Carrito</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
