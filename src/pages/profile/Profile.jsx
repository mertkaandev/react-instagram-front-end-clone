import React from "react";
import "./profile.css";

import Header from "../../components/header/Header.jsx";
import ProfilePost from "../../components/profilePost/ProfilePost.jsx";

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GridOnIcon from '@mui/icons-material/GridOn';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TvIcon from '@mui/icons-material/Tv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SellIcon from '@mui/icons-material/Sell';

import personImage from "../../assets/personImage.jpg"

const Profile = () => {
     return (
        <div className="profile">
            <Header />
            <div className="profile-container">
                <div className="profile-header">

                   <div className="header-left">
                     <img className="profile-image" src={personImage} alt="" />
                   </div>

                   <div className="header-right">

                     <div className="header-right-top">
                        <span className="profile-username">mertkaan</span>
                        <div className="profile-page-buttons">
                           <a className="edit-button" href="/edit"><button>Düzenle</button></a>
                           <a href="/settings"><button><SettingsIcon /></button></a>
                           <a href="/logout"><button><LogoutIcon /></button></a>
                        </div>
                     </div>

                     <div className="header-right-center">
                        <span><b>123</b>{" "}gönderi</span>
                        <span><b>1659</b>{" "}takipçi</span>
                        <span><b>445</b>{" "}takip</span>
                     </div>

                     <div className="header-right-bottom">
                         <span className="profile-name">Mert Kaan</span>
                         <span>www.github.com/mertkaandev</span>
                     </div>
                   </div>

                </div>
                
                <div className="profile-body">
                    <div className="profile-nav-tabs">
                      <button>
                        <GridOnIcon/>
                        <span>Gönderiler</span>
                      </button>

                      <button>
                        <VideoLibraryIcon/>
                        <span>Videolar</span>
                      </button>

                      <button>
                        <TvIcon/>
                        <span>IG TV</span>
                      </button>

                      <button>
                        <BookmarkIcon/>
                        <span>Kaydedilmiş</span>
                      </button>

                      <button>
                        <SellIcon/>
                        <span>Etiketlenmiş</span>
                      </button>
                    </div>

                    <div className="profile-body-posts">
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                       <ProfilePost />
                    </div>
                </div>
                
            </div>
        </div>
     )
};

export default Profile;