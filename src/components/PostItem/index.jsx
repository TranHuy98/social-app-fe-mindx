import React, { useState } from 'react';
import { Input } from 'antd';
import Avatar from 'antd/es/avatar/avatar';
import HeartOutline from '../HeartOutline';
import mindx from '/mindxLogo.jpeg';
import MessageIcon from '../MessageIcon';
import CommentItem from '../CommentItem';
import './styles.scss';


const templateContent = "123456789asdakfchnadkjkvjsdflwqwwwwdaxffb welijerf dlv erl wfj qrfso giwe erf  ebv wlek fbe ikqwie qwrpripotu poiuweiop wi po w epodfi gjf ";

const PostItem = (props) => {
    const checkingContentLength = templateContent.length > 200;
    const getContent = `${checkingContentLength ? `${templateContent.slice(0, 150)}...` : templateContent}`;
    const [viewMore, setViewMore] = useState(false);

    // moi them
    const [noidung, setNoiDung] = useState();

    const handleViewMore = (view) => {
        setViewMore(view)
    };

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch('https://project-social-app-mindx77.onrender.com/posts/662644ae7584eca051681af1', {
                    method: GET,
                });
                const data = await response.json();
                setNoiDung(data)
            } catch (error) {
                console.error('Failed to fetch users', error);
            }
        };

        fetchPost();
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