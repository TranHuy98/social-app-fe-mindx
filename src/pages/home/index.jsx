import React from 'react';
import CreatePost from '../../components/CreatePost';
import PostItem from '../../components/PostItem';
import './styles.scss';
import { useState, useEffect } from 'react';

//30/4/2024

import axios from 'axios';

const Home = () => {

    const [postData, setPostData] = useState([]);


    axios.get('https://project-social-app-mindx77.onrender.com/posts')
        .then(response => {

            console.log(response.data.data);
            console.log('test api success!');
            setPostData(response.data.data.items);
        })
        .catch(error => {
            console.error(error);
        });

    console.log("log ra postData");
    console.log(postData);


    return (
        <div className="container-home">
            <div className="create-post">
                <CreatePost className="create-post-top" />
            </div>
            <div className="list-post">
                {postData.map((item, index) => {
                    console.log(item.postContent);
                    console.log(index);
                    return (
                        <PostItem post={item.postContent} key={index} />
                    );
                })}

                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    )
}

export default Home;