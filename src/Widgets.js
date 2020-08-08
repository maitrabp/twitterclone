import React from 'react'
import "./Widgets.css"
import SearchIcon from "@material-ui/icons/Search"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"
function Widgets() {
    return (
        <div className = "Widgets">
            <div className = "widgets_input">
                <SearchIcon className = "widgets_searchIcon"></SearchIcon>
                <input placeholder = "Search Twitter" type = "text"/>
            </div>
            <div className = "widgets_widgetContainer">
                <h2> What's happening?</h2>

                <TwitterTweetEmbed tweetId = {"1265741120711143424"}/>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="maaitraa"
                    options = {{height:400}}
                />
                <TwitterShareButton 
                options = {{text: "#react.js is cool!", via: "maaitraa"}}/>
            </div>

        </div>
    )
}

export default Widgets
