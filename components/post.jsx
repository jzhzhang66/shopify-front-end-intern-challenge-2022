import { useState } from "react";
import { Icon } from '@iconify/react';

export default function Post({ postInfo }) {
    const [liked, setLiked] = useState(false);

    return <div className="post-container">
        <img src={postInfo.url} />
        <br />
        <div className="post-button-content-container">
            <div className="post-text-content">
                <b>{postInfo.title}</b>
                <br />
                <a>{postInfo.date}</a>
                <br />
            </div>
            <Icon className="heart" onClick={() => setLiked(prevLiked => !prevLiked)} icon={liked ? "ant-design:heart-filled" : "ant-design:heart-outlined"}  color={liked ? "pink" : "white"}  width="50" height="50" />
        </div>
    </div>
}