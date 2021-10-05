import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>ShivamAdmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg'
            alt='profile pic'
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
