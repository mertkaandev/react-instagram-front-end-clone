import React, {useState} from "react";
import "./header.css";

import Share from "../share/Share.jsx";
import headerLogo from "../../assets/headerLogo.png";
import personImage from "../../assets/personImage.jpg"

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import {Link} from "react-router-dom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="header">
      <div className="header-wrapper">

        {openModal ? 
        (<div className="header-share">
          <Share/>
        </div>) : ""}

        <div className="header-logo-container">
          <Link to="/">
            <img className="header-logo" src={headerLogo} alt="" />
          </Link>
        </div>

        <div className="header-searchbar">
          <input type="text" placeholder={`Search`} />
          <SearchIcon style={{cursor: "pointer"}}/>
        </div>

        <div className="header-icons">      
           <a href="/">     
           <HomeIcon style={{cursor:"pointer", color: "black"}}/>
           </a> 

           <a className="header-message-icon" href="/messenger"> 
           <MarkunreadIcon style={{cursor:"pointer", color: "black"}}/>
           <span>1</span>
           </a> 
 
           <AddAPhotoIcon onClick={()=> setOpenModal(!openModal)}  style={{cursor:"pointer", color: "black"}}/>
           
           <a href="/:username">
           <img className="header-profile-picture" style={{cursor:"pointer"}} src={personImage} alt="" />
           </a>
        </div>

      </div>
    </div>
  );
};

export default Header;
