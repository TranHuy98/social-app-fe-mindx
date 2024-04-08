import React from 'react';
import { Outlet } from 'react-router-dom';
import social from '../../assets/social-media.jpg';
import mindxLogo1 from '../../assets/mindx-logo1.png';
import './styles.scss';

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <div className="item logo">
        <img src={mindxLogo1} className="mindx-logo" />
        <img src={social} />
      </div>
      <div className="item content-page">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout;