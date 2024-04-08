import React, { useState } from 'react';
import { Input } from 'antd';
import Avatar from 'antd/es/avatar/avatar';
import HeartOutline from '../HeartOutline';
import mindx from '/mindxLogo.jpeg';
import MessageIcon from '../MessageIcon';
import CommentItem from '../CommentItem';
import './styles.scss';

const templateContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ut rerum facilis corporis voluptas? Cumque soluta dolorum exercitationem quam corporis distinctio cum! Explicabo quod quibusdam accusamus, enim dolore voluptates architecto!";
const PostItem = (props) => {
    const checkingContentLength = templateContent.length > 200;
    const getContent = `${checkingContentLength ? `${templateContent.slice(0, 150)}...` : templateContent}`;
    const [viewMore, setViewMore] = useState(false);

    const handleViewMore = (view) => {
        setViewMore(view)
    }
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
                    {viewMore ? templateContent : getContent} {checkingContentLength &&
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