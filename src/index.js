import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/item:idItem" element={<p>Hola Item</p>} />
      <Route path="/category:idCategory" element={<ItemListContainer />} />
      
    </Routes>
  </BrowserRouter>
);
