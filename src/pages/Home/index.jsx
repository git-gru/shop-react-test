import React from "react";
import Collection from "./components/Collection";

import { shopFeaturedCollections } from "../../data/mockdata";

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

  return (
    <div className="home-container">
      <div className="section">
        <h1 className="section-title">Shop featured collections</h1>
        <div className="collections-container">{collections}</div>
      </div>
    </div>
  );
};

export default Home;
