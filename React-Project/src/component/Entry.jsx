import React from "react";
import marker from "../assets/marker.png";
const Entry = () => {
  return (
    <article className="journal">
      <div className="main-image-container">
        <img
          className="main-image"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt=""
        />
      </div>
      <div>
        <img className="marker" src={marker} alt="map" />
        <span className="country">Japan</span>
        <a href="">View on Google Maps</a>
        <h2 className="title">Mount Fuji</h2>
        <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          12,380 feet. Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
};

export default Entry;
