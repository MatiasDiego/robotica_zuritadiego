import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <NavBar />
    <ItemListContainer greeting="FUTURO ECOMMERCE DE PRODUCTOS DE ROBOTICA" />
  </div>
);
