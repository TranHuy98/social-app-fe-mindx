import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/Root/RootLayout';
import AuthLayout from './layouts/Auth/AuthLayout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Personal from './pages/personal';
import Account from './pages/account';
import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          {['', '/home'].map((item, idx) => <Route key={idx} path={item} element={<Home />} />)}
          <Route path='personal' element={<Personal />} />
          <Route path='account' element={<Account />} />
        </Route>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
