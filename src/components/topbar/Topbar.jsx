import React from 'react';
import './Topbar.css';
import {Notifications, Language, Settings} from '@mui/icons-material';


const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dash</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="profile" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar