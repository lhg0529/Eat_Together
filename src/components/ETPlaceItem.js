import React from 'react';
import '../styles/ETPlaceItem.css';

function ETPlaceItem({ image, placename, address }) {
  return (
    <div className="place-item-container">
      <div className="place-image-container">
        <img src={image} alt="tumbnail" />
      </div>
      <div>
        <h3 className="place-name">{placename}</h3>
        <div className="place-address">{address}</div>
      </div>
    </div>
  );
}

export default ETPlaceItem;
