import React from 'react';
import { Avatar } from 'antd';
import mindx from '/mindxLogo.jpeg';
import './styles.scss';

const CommentItem = (props) => {
    return (
        <div className={`comment-item ${props.className}`}>
            <Avatar size={30} src={mindx} />
            <div className="author-comment">
                <span className="author">
                    Hoàng Tiểu Phạm
                </span>
                <p>Bài học này thật ý nghĩa, cảm ơn MindX!</p>
            </div>
        </div>
    )
}

export default CommentItem;