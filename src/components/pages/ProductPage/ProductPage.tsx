import React from "react";
import "./ProductPage.css";
import { Nav } from "../../layouts/Nav/Nav";
import { ProductList } from "../../layouts/ProductList/ProductList";

const ProductPage = () => {
  return (
    <section>
        <Nav />
         <h1 className="product-header text-center p-3">All available Products</h1>
        <ProductList />
    </section>
  );
};

export default ProductPage;