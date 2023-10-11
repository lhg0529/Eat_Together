import React from 'react';
import '../styles/ETPlaceItem.css';

function ETPlaceItem({ image, placename, address }) {
  return (
    <div className="place-item-container">
      <div className="image-container">
        <img src={image} alt="cat" width="100%" />
      </div>
      <div>
        <h3 className="place-name">{placename}</h3>
        <div className="place-address">{address}</div>
      </div>
    </div>
  );
}

export default ETPlaceItem;
