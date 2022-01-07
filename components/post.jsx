import { useState } from "react";
import { Icon } from '@iconify/react';

export default function Post({ postInfo }) {
    const [liked, setLiked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const buttonText = isClicked ? "Copied to clipboard!" : "Copy image link";
    const onClick = async e => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 3 * 1000);
        e.preventDefault();
        const el = document.createElement('input');
        el.value = postInfo.url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

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
            <Icon className="heart" onClick={() => setLiked(prevLiked => !prevLiked)} icon={liked ? "ant-design:heart-filled" : "ant-design:heart-outlined"} color={liked ? "pink" : "white"} width="50" height="50" />
        </div>
        <button className="post-button" onClick={onClick} >
            {buttonText}
        </button>
    </div>
}