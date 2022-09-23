import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import UnderConstruction from "../img/under_construction.jpg";

const Cart = () => {
  const contexto = useContext(CartContext);

  return (
    <div>
      <h1>SU CARRITO</h1>
      <Link to="/">
        <button className="btn btn-primary">Seguir Comprando</button>
      </Link>
      {contexto.cartList.length > 0 ? (
        <button onClick={contexto.clear}>BORRAR PRODUCTOS</button>
      ) : (
        <p>Su carrito está vacio</p>
      )}
      <div className="container" id="red">
        {contexto.cartList.length > 0 &&
          contexto.cartList.map((item) => (
            <div className="container detallesProducto" id="green" key={item.idItem}>
              <img src={item.imgItem} alt="Imagen de producto" />
              <p>Nombre del Producto: {item.nameItem}</p>
              <p>Cantidad seleccionada: {item.cantItem}</p>
              <p>Precio por unidad: $ {item.costItem}</p>
              <p>Precio total: $ {contexto.totalPorItem(item.idItem)}</p>
              <button
                className="btn btn-danger"
                onClick={() => contexto.removeItem(item.idItem)}
              >
                BORRAR
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;

{
  /* <div className="imgUnderContainer">
    <img className="imgUnderConstruction" src={UnderConstruction} />
</div> */
}
