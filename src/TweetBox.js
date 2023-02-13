import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from "@material-ui/core"
import db from './firebase'
import firebase from "firebase/compat/app";

function TweetBox() {
  const [tweetMessage, setTweetMesssage] = useState ("");
  const [tweetImage, setTweetImage] = useState ("");

  const sendTweet = (e) => {
    e.preventDefault();
    // const created = firebase.firestore.Timestamp.fromDate(new Date()).toDate();
    // console.log(created)

    db.collection("postDate").add({
      displayName : "Mamadun",
      userName : "iam.meds",
      verified : false, 
      text : tweetMessage,
      avatar : "https://yt3.ggpht.com/yti/AHXOFjX6i-RZRamLO79F8JdKmGOrizu0aH4xLUksIbSbvw=s88-c-k-c0x00ffffff-no-rj-mo",
      image : tweetImage,
      date: firebase.firestore.Timestamp.fromDate(new Date()).toDate()
    });

    setTweetImage("");
    setTweetMesssage("");
  };

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
                <Avatar src='https://yt3.ggpht.com/yti/AHXOFjX6i-RZRamLO79F8JdKmGOrizu0aH4xLUksIbSbvw=s88-c-k-c0x00ffffff-no-rj-mo'/>
                <input value = {tweetMessage} onChange = {(e) => setTweetMesssage(e.target.value)} placeholder="What's happening?" type="text" />
            </div>
            <input value = {tweetImage} onChange={(e) => setTweetImage(e.target.value)} className='tweetBox_imageInput' placeholder="Optional: Enter image URL" type="text" />

            {/* <Button onClick={sendTweet} type="submit" className='tweetBox_tweetButton'>Tweet</Button> */}
            <Button onClick={() => {
              if (!tweetMessage) {
                alert("The tweet message cannot be empty");
                return;
              }
              sendTweet()
            }} 
            type="submit" className='tweetBox_tweetButton'>Tweet</Button>

        </form>
    </div>
  )
}

export default TweetBox