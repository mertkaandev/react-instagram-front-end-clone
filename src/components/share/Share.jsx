import React, { useState } from "react";
import "./share.css";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import personImage from "../../assets/personImage.jpg";

const Share = () => {
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [fileSelected, setFileSelected] = useState(false);
  const [imagePreview, setImagePreview] = useState();
  const [videoPreview, setVideoPreview] = useState();

  return (
    <div className="share" style={{ height: "200px" }}>
      <div className="share-top">
        <span>Yeni Gönderi Oluştur</span>
      </div>

      <div className="share-bottom">
        <div className="share-bottom-person-infos">
          <img className="share-bottom-share-person" src={personImage} alt="" />
          <input
            className="share-input"
            type="text"
            placeholder="What do you think?"
          />
          <button className="share-button">Share</button>
        </div>

        <div className="share-bottom-modal-buttons">
          <label htmlFor="imageFile" style={{ cursor: "pointer" }}>
            <button type="button" style={{ pointerEvents: "none" }}>
              <AddAPhotoIcon />
              {image ? (<b>Fotoğraf (Seçildi)</b>) : (<b>Fotoğraf</b>)}
            </button>
          </label>
          <input
            type="file"
            name="image"
            id="imageFile"
            accept=".jpg, .jpeg, .png"
            style={{ display: "none" }}
            onChange={(event) => {
              const image = event.target.files[0];
              setImage(image);
              setImagePreview(URL.createObjectURL(event.target.files[0]));
              setFileSelected(true);
            }}
          />

          <label htmlFor="videoFile" style={{ cursor: "pointer" }}>
            <button type="button" style={{ pointerEvents: "none" }}>
              <VideoCallIcon />
              {video ? (<b>Video (Seçildi)</b>) : (<b>Video</b>)}
            </button>
          </label>
          <input
            type="file"
            name="video"
            id="videoFile"
            accept=".mp4"
            style={{ display: "none" }}
            onChange={(event) => {
              const video = event.target.files[0];
              setVideo(video);
              setVideoPreview(URL.createObjectURL(event.target.files[0]));
              setFileSelected(true);
            }}
          />
          
        </div>
      </div>

      {fileSelected && image ? (
            <div className="share-bottom-img">
               <img style={{height:"200px", width:"375px", objectFit:"cover"}} className="share-image" src={imagePreview} alt="" />
            </div>
          ) : 
          (
            <div style={{display: "none"}}></div>
          )
      }

      {fileSelected && video ? (
            <div className="share-bottom-img">
               <iframe style={{height:"200px", width:"375px", objectFit:"cover"}} className="share-image" src={videoPreview} alt="" />
            </div>
          ) : 
          (
            <div style={{display: "none"}}></div>
          )
      }   
    </div>
  );
};

export default Share;
