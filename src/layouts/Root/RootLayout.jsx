import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.scss';

const RootLayout = () => {
  return (
    <div className="container-root-layout">
      <Header />
      <div className="container-page">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout;