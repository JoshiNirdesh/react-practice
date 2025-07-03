import React from "react";
import marker from "../assets/marker.png";
const Entry = (props) => {
  return (
    <article className="journal">
      <div className="main-image-container">
        <img
          className="main-image"
          src={props.data.img.src}
          alt={props.data.img.alt}
        />
      </div>
      <div>
        <img className="marker" src={marker} alt="map" />
        <span className="country">{props.data.country}</span>
        <a href="">View on Google Maps</a>
        <h2 className="title">{props.data.title}</h2>
        <p className="date">{props.data.dates}</p>
        <p>{props.data.text}</p>
      </div>
    </article>
  );
};

export default Entry;
