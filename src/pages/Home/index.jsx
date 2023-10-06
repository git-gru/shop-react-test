import React from "react";
import Product from "./components/Product";
import Collection from "./components/Collection";

import {
  shopFeaturedCollections,
  shopProductsOnSale,
} from "../../data/mockdata";

import "./style.css";

const Home = () => {
  const collections = shopFeaturedCollections.map((collection, index) => {
    return (
      <Collection
        key={`${collection.title}-${index}`}
        title={collection.title}
        description={collection.description}
        image={collection.image}
      />
    );
  });

  const products = shopProductsOnSale.map((product, index) => {
    return (
      <Product
        key={`${product.productName}-${index}`}
        company={product.company}
        productName={product.productName}
        maxPrice={product.maxPrice}
        minPrice={product.minPrice}
        image={product.image}
      />
    );
  });

  return (
    <div className="home-container">
      <div className="section">
        <h1 className="section-title">Shop featured collections</h1>
        <div className="collections-container">{collections}</div>
      </div>
      <div className="section">
        <h1 className="section-title">Shop products on sale</h1>
        <div className="products-container">{products}</div>
      </div>
    </div>
  );
};

export default Home;
