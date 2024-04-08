import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import logo from '../../assets/mindx-logo1.png';
import HomeIcon from '../HomeIcon';
import PersonalIcon from '../PersonalIcon';
import AccountIcon from '../AccountIcon';
import './styles.scss';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="page-header">
            <div className="logo">
                <img src={logo} />
            </div>
            <ul className="list-router-page">
                <li>
                    <NavLink to={'/home'}>
                        {/* Trang chủ */}
                        <span className="title">Trang chủ</span>
                        <HomeIcon className="icon-header" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/personal'}>
                        <span className="title">Cá nhân</span>
                        <PersonalIcon className="icon-header" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/account'}>
                        <span className="title">Tài khoản</span>
                        <AccountIcon className="icon-header" />
                    </NavLink>
                </li>
            </ul>
            <Button onClick={() => {
                navigate('/auth/login');
            }}>
                Đăng xuất
            </Button>
        </div>
    )
}

export default Header;