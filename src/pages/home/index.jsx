import React from 'react';
import CreatePost from '../../components/CreatePost';
import PostItem from '../../components/PostItem';
import './styles.scss';
import { useState } from 'react';

//30/4/2024

import axios from 'axios';

const Home = () => {

    const [postData, setPostData] = useState();

    axios.get('https://project-social-app-mindx77.onrender.com/posts')
        .then(response => {

            console.log(response.data.data);
            console.log('test api success!');
            setPostData(response.data.data.items);
            console.log(postData);
        })
        .catch(error => {
            // Xử lý lỗi ở đây
            console.error(error);
        });

    return (
        <div className="container-home">
            <div className="create-post">
                <CreatePost className="create-post-top" />
            </div>
            <div className="list-post">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    )
}

export default Home;