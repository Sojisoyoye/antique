import React from "react";
import "./ProductList.css";

export const ProductList = () => {
  const products = [
    {
      name: "Product name",
      imageUrl: "https://via.placeholder.com/250",
      price: "N7,500",
      size: "4 by 8",
      thickness: "18mm",
    },
    {
      name: "Product name",
      imageUrl: "https://via.placeholder.com/250",
      price: "N7,500",
      size: "4 by 8",
      thickness: "18mm",
    },
    {
      name: "Product name",
      imageUrl: "https://via.placeholder.com/250",
      price: "N7,500",
      size: "4 by 8",
      thickness: "18mm",
    },
    {
      name: "Product name",
      imageUrl: "https://via.placeholder.com/250",
      price: "N7,500",
      size: "4 by 8",
      thickness: "18mm",
    },
    {
      name: "Product name",
      imageUrl: "https://via.placeholder.com/250",
      price: "N7,500",
      size: "4 by 8",
      thickness: "18mm",
    },
    {
      name: "Product name",
      imageUrl: "https://via.placeholder.com/250",
      price: "N7,500",
      size: "4 by 8",
      thickness: "18mm",
    },
    {
      name: "Product name",
      imageUrl: "https://via.placeholder.com/250",
      price: "N7,500",
      size: "4 by 8",
      thickness: "18mm",
    },
    {
      name: "Product name",
      imageUrl: "https://via.placeholder.com/250",
      price: "N7,500",
      size: "4 by 8",
      thickness: "18mm",
    },
    {
      name: "Product name",
      imageUrl: "https://via.placeholder.com/250",
      price: "N7,500",
      size: "4 by 8",
      thickness: "18mm",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {products &&
            products.map((product: any, index) => (
              <div className="col product-container p-3" key={index}>
                  <div>
                  <div>
                  <img src={product.imageUrl} alt="" />
                </div>
                <div className="d-flex flex-column product-details">
                  <span className="name">{product.name}</span>
                  <span className="price">{product.price}</span>
                  <span className="size">({product.size}) inches</span>
                  <span className="thickness">{product.thickness}</span>
                </div>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
