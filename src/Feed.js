import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  // firebasethings
  const [posts, setPosts] = useState ([]);
  
  // firebasethings
  useEffect(() => {
    db.collection('postDate').orderBy("date", "desc").onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  
  return (
    <div className='feed'>
        {/* header */}
        <div className='feed_header'>
          <h2>Home</h2>
        </div>

        {/* Tweet Box */}
        <TweetBox />
        
        {/* firebasethings for post */}
        <FlipMove>
          {posts.map((post, index) => (
          <Post displayName={post.displayName} userName={post.userName} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image} date={post.date} key={index} />
          ))}
        </FlipMove>
        {/* <Post displayName="some one" userName="zzzusername" verified={true} text="YOOOO! It's Working." avatar="https://yt3.ggpht.com/yti/AHXOFjX6i-RZRamLO79F8JdKmGOrizu0aH4xLUksIbSbvw=s88-c-k-c0x00ffffff-no-rj-mo" image="https://media0.giphy.com/media/VbnUQpnihPSIgIXuZv/200w.gif?cid=6c09b952j0njhwzp1w7ft5o2eu5qizgf8pzks2x6fa8mxhlh&rid=200w.gif&ct=g"/> */}
        
        {/* this is what used by Claver Programing The key is "text" */}
        {/* <FlipMove>
          {posts.map((post) => (
          <Post displayName={post.displayName} userName={post.userName} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image} key={post.text} />
          ))}
        </FlipMove> */}
    </div>
  )
}

export default Feed