import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./components/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
);
