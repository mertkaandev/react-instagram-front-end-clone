import React from "react";
import "./post.css";

import postImage from "../../assets/postImage.jpg"
import personImage from "../../assets/personImage.jpg"

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = () => {
  return (
    <div className="post-container">
      
      <div className="post-header">
        <div className="post-header-container">
           <img
            className="post-header-person"
            src={personImage}
            alt=""
           />
           <span className="post-header-name">mertkaan</span>
           <button><MoreHorizIcon/></button>
        </div>
      </div>


      <div className="post-image">
        <img
          className="post-image-sz"
          src={postImage}
          alt=""
        />
      </div>

      <div className="post-bottom">
        <div className="post-icons">
          <button>
            <FavoriteBorderIcon className="post-like-icon active" />
          </button>
          <button>
            <CommentOutlinedIcon className="post-comment-icon" />
          </button>
          <button>
            <SendOutlinedIcon className="post-send-icon" />
          </button>
        </div>

        <span className="post-like-count">0 beğeni</span>

        <div className="post-content">
          <a href="/" className="profile-username">
            mertkaan
          </a>{" "}
          <span className="post-text">
          Ivan Konstantinovich Aivazovsky - The birth of Aphrodite, 1887
          </span>
        </div>

        <div className="post-time">1 dakika önce</div>
      </div>
    </div>
  );
};

export default Post;
