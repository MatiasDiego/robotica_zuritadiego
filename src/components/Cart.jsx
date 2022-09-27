import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import emptyCartImg from "../img/empty_cart.png";

const Cart = () => {
  const contexto = useContext(CartContext);

  return (
    <div className="container-fluid row">
      {contexto.cartList.length > 0 &&
        contexto.cartList.map((item) => (
          <div className="" key={item.idItem}>
            <table className="table">
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
      {contexto.cartList.length === 0 && (
        <div className="card cardCartEmpty">
          <div className="card-body cart">
            <div className="col-sm-12 empty-cart-cls text-center">
              <img
                src={emptyCartImg}
                width="130"
                height="130"
                className="img-fluid mb-4 mr-3"
              />
              <h3>
                <strong>Su carrito está vacío</strong>
              </h3>
              <h4>Agregue algo para hacerme feliz :)</h4>
              <Link to="/">
                <button
                  className="btn btn-details cart-btn-transform m-3"
                  data-abc="true"
                >
                  SEGUIR COMPRANDO
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;