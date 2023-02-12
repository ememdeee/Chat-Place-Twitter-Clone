import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import firebase from "firebase/compat/app";

const Post = forwardRef(({ displayName, userName, verified, text, image, avatar, date }, ref) => {

    const timestamp = firebase.firestore.Timestamp.fromDate(new Date(date.seconds * 1000 + date.nanoseconds / 1000000));
    const dateCreated = timestamp.toDate();

  return (
    <div className='post' ref={ref}>
        <div className='post_avatar'>
            <Avatar src={avatar} />
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>{displayName} {" "}
                        <span className='post_headerSpecial'>
                            {verified && <VerifiedIcon className='post_badge' />} @{userName}</span>
                    </h3>
                    {/* <span className='post_date'>{dateCreated.toLocaleDateString()} {dateCreated.toLocaleTimeString()}</span> */}
                </div>
                <div className='post_headerDescription'>
                    <p>{text}</p>
                </div>
            </div>

            <img src={image} alt='' />
            <span className='post_date'>{dateCreated.toLocaleDateString()} {dateCreated.toLocaleTimeString()}</span>
            <div className='post_footer'>
                <ChatBubbleIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />

            </div>
        </div>
    </div>
  );
});

export default Post