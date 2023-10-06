import React from "react";

import Image from "../../../../components/Image";

import "./style.css";

const Product = ({ company, productName, maxPrice, minPrice, image }) => {
  const price =
    maxPrice === minPrice
      ? `$${Number(maxPrice).toFixed(2)}`
      : `$${Number(minPrice).toFixed(2)} - $${Number(maxPrice).toFixed(2)}`;
  return (
    <div className="product-container">
      <Image className="img" src={image} />
      <div className="content">
        <span className="company-name">{company}</span>
        <p className="product-name">{productName}</p>
        <div className="price-container">
          <span className="title">Price</span>
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
