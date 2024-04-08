import React from 'react';
import './styles.scss';

const Footer = () => {
    return (
        <div className="page-footer">
            <h1>Social Media App</h1>
            <p className="content">
                Sản phẩm cung cấp cho khoá học Web fullstack của MindX. Giúp học viên trải nghiệm xây dựng sản phẩm khi kết hợp Frontend và Backend.
                <br />Được thiết kế dành riêng cho khoá học Web fullstack tại MindX
            </p>
            <div className="copy-right">
                Copyright ©2023 | Made by <span className="mindx" style={{ color: "var(--color-main)" }}>MindX Technology School</span>
            </div>
        </div>
    )
}

export default Footer;