import React, {forwardRef} from 'react'
import {Avatar} from "@material-ui/core"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"
import "./Post.css"
const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    /*likes, comments, retweets, and uploads are missin, for timestamp moment.js was mentioned*/
}, ref) => {
    return (
        <div className = "post" ref = {ref}>
            <div className = "post_avatar">
                <Avatar src = {avatar}/>
            </div>
            <div className = "post_body">
                <div className = "post_header">
                    <div className = "post_headertext">
                        <h3>
                            {displayName}{" "}<span>{verified && <CheckCircleIcon className = "post_badge"/>}</span> <span className="post_headerSpecial">{username}</span>
                        </h3>
                    </div>
                    <div className = "post_headerDescription">
                        <p> {text}</p>
                    </div>
                </div>
                <img src = {image} alt=""/>
                <div className = "post_footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
});

export default Post
