import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ picture, title, description, price, stock }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (cantidad) => {
    alert("Has seleccionado " + cantidad + " items");
    setItemCount(cantidad);
  };

  return (
    <>
      <div className="card mb-3 itemdetail_container">
        <div className="row g-0">
          {/* COLUMNA DE IMAGEN */}
          <div className="col-md-4">
            <img
              src={picture}
              className="img-fluid rounded-start"
              alt="Robot 1"
            />
          </div>
          {/* COLUMNA DETALLES DE PRODUCTO */}
          <div className="col-md-8 col_itemdetail rounded-end">
            <div>
              <h5 className="card-title">{title}</h5>
              <p className="card-text description_itemdetail">{description}</p>
              <p className="price_itemdetail">$ {price}</p>
              <p className="card-text">
                <small className="text-muted">{stock} unidades en stock</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="itemCountContainer">
        {itemCount === 0 ? (
          <ItemCount stock={stock} inicial={itemCount} onAdd={onAdd} />
        ) : (
          <Link to="/carrito">
            <button className="btn btn-primary">Ir Al Carrito</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
