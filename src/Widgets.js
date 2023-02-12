import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
        <div className='windgets_input'>
          <SearchIcon className='widgets_searchIcon' />
          <input placeholder='Search Twitter' type="text" />
        </div>
        <div className='widgets_widgetContainer'>
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={'1623967909256265730'} />

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="iam_meds"
            options={{height: 400}}
          />
        </div>

    </div>
  )
}

export default Widgets