import React from "react";
import marker from "../assets/marker.png";
const Entry = (props) => {
  console.log(props);
  return (
    <article className="journal">
      <div className="main-image-container">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
      </div>
      <div>
        <img className="marker" src={marker} alt="map" />
        <span className="country">{props.country}</span>
        <a href="">View on Google Maps</a>
        <h2 className="title">{props.title}</h2>
        <p className="date">{props.dates}</p>
        <p>{props.text}</p>
      </div>
    </article>
  );
};

export default Entry;
