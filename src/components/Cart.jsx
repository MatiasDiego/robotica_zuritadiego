import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import UnderConstruction from "../img/under_construction.jpg";

const Cart = () => {
  const contexto = useContext(CartContext);

  return (
    <div className="container-fluid row p-0">
      {contexto.cartList.length > 0 &&
        contexto.cartList.map((item) => (
            <div className="" key={item.idItem}>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Cantidad de Productos</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio por Unidad</th>
                    <th scope="col">Importe Total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{item.cantItem}</th>
                    <th id="flex">
                      <img
                        className="imgProductTable"
                        src={item.imgItem}
                        alt="Imagen de producto"
                      />
                      <p>{item.nameItem}</p>
                    </th>
                    <td>$ {item.costItem}</td>
                    <td>$ {contexto.total()}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => contexto.removeItem(item.idItem)}
                      >
                        BORRAR
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        ))}
    </div>
  );
};

export default Cart;

{
  /* <Link to="/">
        <button className="btn btn-primary">Seguir Comprando</button>
      </Link>
      {contexto.cartList.length > 0 ? (
        <button onClick={contexto.clear}>BORRAR PRODUCTOS</button>
      ) : (
        <p>Su carrito está vacio</p>
      )} */
}

{
  /* <div className="imgUnderContainer">
    <img className="imgUnderConstruction" src={UnderConstruction} />
</div> */
}

{
  /* <div
              className="container col-md-6 detallesProducto"
              id="green"
              key={item.idItem}
            >
              <img
                id="imgProducts"
                src={item.imgItem}
                alt="Imagen de producto"
              />
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
            </div> */
}
