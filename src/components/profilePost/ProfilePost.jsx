import React from "react";
import "./profilepost.css";

import postImage from "../../assets/postImage.jpg"

const ProfilePost = () => {
      return (
        <div className="profile-post">
             <img className="profile-post-image" src={postImage} alt="" />
        </div>
      )

}

export default ProfilePost;