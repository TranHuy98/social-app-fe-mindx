import React from 'react';
import { Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import CreatePost from '../../components/CreatePost';
import PostItem from '../../components/PostItem';
import SettingIcon from '../../components/SettingIcon';
import mindx from '/mindxLogo.jpeg';
import './styles.scss';

const Personal = () => {
    const isMyProfile = true;
    const navigate = useNavigate();
    return (
        <div className="container-personal">
            <div className="item user-info">
                <Avatar className="avatar" size={250} shape="square" src={mindx} />
                <hr />
                <div className="info bg-white">
                    <SettingIcon className="setting-icon" onClick={() => {
                        navigate('/account');
                    }} />
                    <p>Họ tên: Mindx School</p>
                    <p>Email: mindxschool@mail.com</p>
                </div>
            </div>
            <div className="item list-post">
                {isMyProfile && <CreatePost />}
                <div className="post-of-user">
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                </div>
            </div>
        </div>
    )
}

export default Personal;