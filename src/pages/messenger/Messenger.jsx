import React from "react";
import "./messenger.css";

import Header from "../../components/header/Header.jsx";
import MessengerFriend from "../../components/messengerFriend/MessengerFriend.jsx";
import MessengerOnlineFriend from "../../components/messengerOnlineFriend/MessengerOnlineFriend.jsx";
import MessengerMessage from "../../components/messengerMessage/MessengerMessage.jsx";

const Messenger = () => {
      return (
        <div className="messenger">
            <Header />
            <div className="messenger-container">
              <div className="messenger-left">
                 <div className="messenger-left-wrapper">
                    <input className="messenger-left-input" placeholder="Arkadaşlarını ara"/>
                    <div className="messenger-left-friends">
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                       <MessengerFriend/>
                    </div>
                 </div>
              </div>

              <div className="messenger-center">
                 <div className="messenger-center-wrapper">
                      <div className="messenger-center-top">
                         <div><MessengerMessage /></div>
                      </div>
                      <div className="messenger-center-bottom">
                        <input type="text" placeholder="Mesajını yaz"></input>
                        <button>Gönder</button>
                      </div>
                 </div>
              </div>

              <div className="messenger-right">
                <div className="messenger-right-wrapper">
                   <span>Açık Arkadaşlar</span>
                   <div className="messenger-right-online-friends">
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                      <MessengerOnlineFriend />
                   </div>
                </div>
              </div>

            </div>
        </div>
      )
}

export default Messenger;