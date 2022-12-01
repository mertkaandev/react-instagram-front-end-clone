import React from "react";
import "./messengerFriend.css";

import personImage from "../../assets/personImage.jpg"

const MessengerFriend = () =>  {
      return (
        <div className="messenger-friend">
            <img className="messenger-friend-image" src={personImage} alt="" />
            <span>mertkaan</span>
        </div>
      )
};

export default MessengerFriend;