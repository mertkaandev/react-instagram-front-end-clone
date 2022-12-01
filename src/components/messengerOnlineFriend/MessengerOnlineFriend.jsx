import React from 'react';
import "./messengerOnlineFriend.css";

import personImage from "../../assets/personImage.jpg"

const MessengerOnlineFriend = () => {
  return (
    <div className="messenger-online-friend">
            <div className='messenger-online-friend-wrapper'>
               <img className="messenger-online-friend-image" src={personImage} alt="" />
               <span className='messenger-online-friend-green'></span>
            </div>
            <span>mertkaan</span>
    </div>
  )
}

export default MessengerOnlineFriend;