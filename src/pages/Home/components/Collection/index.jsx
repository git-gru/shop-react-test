import React from "react";

import Image from "../../../../components/Image";

import "./style.css";

const Collection = ({ title, description, image }) => {
  return (
    <div className="collection-container">
      <Image className="img" src={image} />
      <div className="content">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};

export default Collection;
