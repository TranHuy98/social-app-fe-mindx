import React from 'react';
import CreatePost from '../../components/CreatePost';
import PostItem from '../../components/PostItem';
import './styles.scss';

const Home = () => {
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