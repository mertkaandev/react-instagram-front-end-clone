import React from 'react';
import "./friend.css"

import personImage from "../../assets/personImage.jpg"

const Friend = () => {
  return (
    <li className="friend-item">
          <div className="friend-item-left">
            <a href="/">
              <img
                className="account-image"
                src={personImage}
                alt=""
              />
            </a>
            <div className="friend-username">
              <a href="/">mertkaan</a>
              <span>Mert Kaan</span>
            </div>
          </div>

          <div className="friend-item-right">
            <button>Profile Git</button>
          </div>
        </li>
  )
}

export default Friend