import React from "react";
import "./rightbox.css";

import Friend from "../friend/Friend.jsx"
import personImage from "../../assets/personImage.jpg";

const Rightbox = () => {
  return (
    <div className="home-right">
      <div className="account">
        <a href="/">
          <img
            className="account-image"
            src={personImage}
            alt=""
          />
        </a>

        <a href="/" className="account-titles">
          <a href="/">mertkaan</a>
          <span>Mert Kaan</span>
        </a>
      </div>

      <span className="friends-title">Arkadaşların</span>
      <ul className="friends-list">
         <Friend/>
         <Friend/>
         <Friend/>
         <Friend/>
         <Friend/>
         <Friend/>
         <Friend/>
         <Friend/>
         <Friend/>
         <Friend/>
         <Friend/>
      </ul>
    </div>
  );
};

export default Rightbox;
