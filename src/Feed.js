import React, {useState, useEffect} from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox"
import Post from "./Post"
import "./Post.css"
import db from './firebase'
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts, setPosts] = useState([]);
    /* USEEFFECT: piece of code that runs based on a given condition 
    (if you dont put anything in the condition, then run it when feed component loads. But if you do put something in [] condition,
        then run it when feed component loads as well as name variable changes or age variable changes (if name and age were passed as condition))
    */
    useEffect(() => {
        /*code to run, here we get from db*/
        db.collection('posts').onSnapshot(snapshot=> (
            /*gives an array every single post and it's data*/
            setPosts(snapshot.docs.map((doc) => doc.data()))
        ))
    }, /*condition*/[]);
    return (
        <div className="Feed">
            {/*Header*/}
            <div className="feed_header">
                <h2>Home</h2>
            </div>


            {/*TweetBox*/}
            <TweetBox/>


            {/*Posts*/}
            <FlipMove>
                {posts.map(post => (
                    <Post
                    key = {post.text}
                    displayName = {post.displayName}
                    username = {post.username}
                    verfieid = {post.verified}
                    text = {post.text}
                    avatar={post.avatar}
                    image={post.image} />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed
