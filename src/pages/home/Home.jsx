import React from "react";
import "./home.css";

import Header from "../../components/header/Header.jsx";
import Post from "../../components/post/Post.jsx";
import Rightbox from "../../components/rightbox/Rightbox.jsx";

const Home = () => {
      return (
      <div className="home">
         <Header/>
         <div className="home-container">
            <div className="home-left">
                 <div className="posts">
                   <Post />
                   <Post />
                   <Post />
                 </div>
            </div>

            <div className="home-right">
                  <Rightbox/>
            </div>
         </div>
      </div>
      )
  
};

export default Home;