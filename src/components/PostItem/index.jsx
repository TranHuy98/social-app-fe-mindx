import React, { useState } from 'react';
import { Input } from 'antd';
import Avatar from 'antd/es/avatar/avatar';
import HeartOutline from '../HeartOutline';
import mindx from '/mindxLogo.jpeg';
import MessageIcon from '../MessageIcon';
import CommentItem from '../CommentItem';
import './styles.scss';
import axios from 'axios';
import { useEffect } from 'react';


const templateContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const PostItem = (props) => {
    const checkingContentLength = templateContent.length > 200;
    const getContent = `${checkingContentLength ? `${templateContent.slice(0, 150)}...` : templateContent}`;
    const [viewMore, setViewMore] = useState(false);

    // moi them
    const [noidung, setNoiDung] = useState();
    const [response, setResponse] = useState(null);

    const handleViewMore = (view) => {
        setViewMore(view)
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const backendData = await axios.get('https://project-social-app-mindx77.onrender.com/posts/662644ae7584eca051681af1');
            setResponse(backendData.data);
            console.log(backendData.data);
            setNoiDung(backendData.data);
            console.log(noiDung);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);

      

    return (
        <div className={`post-item bg-white ${props.className}`}>
            <div className={"author-post"}>
                <Avatar src={mindx} size={40} />
                <div className="author-time">
                    <span className="author">
                        MindX School
                    </span>
                    <small>
                        4 hours ago
                    </small>
                </div>
            </div>
            <div className={"content-post"}>
                <p>
                    {viewMore ? noidung.postContent : getContent} {checkingContentLength &&
                        <span
                            className="view-more"
                            onClick={() => {
                                handleViewMore(!viewMore)
                            }}>
                            {!viewMore ? 'xem thêm' : 'ẩn bớt'}
                        </span>
                    }
                </p>
                <div className="images">
                    <img src={'https://paradisewildhills.com/assets/img/slide/wild-s4.jpg'} className="image-item" />
                </div>
            </div>
            <div className="interact">
                <div className="item-interact">
                    <HeartOutline className={`heart-icon`} />
                    1.2k
                </div>
                <div className="item-interact">
                    <MessageIcon className={`message-icon`} />
                    2
                </div>
                <div className="write-comment">
                    <Input.TextArea className="type-comment" placeholder='Để lại bình luận!' style={{ resize: 'none' }} />
                </div>
            </div>
            <div className="list-comment">
                <div className="list">
                    <CommentItem />
                </div>
                <div className="view-more">
                    Xem tất cả bình luận
                </div>
            </div>
        </div>
    )
}

export default PostItem;