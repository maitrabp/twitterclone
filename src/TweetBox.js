import React, {useState} from 'react'
import "./TweetBox.css"
import {Button, Avatar} from "@material-ui/core"
import db from './firebase'
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Maitra Patel',
            username: '@maaitraa',
            verified: true,
            text: tweetMessage,
            avatar: './images/profilepic.JPG',
            image: tweetImage,
        })
        /*Clear the two states for next input*/
        setTweetMessage("")
        setTweetImage("")
    }
    return (
        <div className = "Tweetbox">
            <form>
                <div className = "tweetBox_input">
                    <Avatar src = "./images/profilepic.JPG"/>
                    <input value = {tweetMessage} 
                           placeholder = "What's happening?"
                           type="text"
                           onChange = {(e)=> setTweetMessage(e.target.value)}/>
                </div>
                <input className = "tweetBox_imageInput" 
                       value = {tweetImage}
                       onChange = {(e)=> setTweetImage(e.target.value)}
                       placeholder = "Optional: Enter image URL" type="text"/>
                <Button className = "tweetBox__tweetButton" onClick = {(e)=>sendTweet(e)}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
