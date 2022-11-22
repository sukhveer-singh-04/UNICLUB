import React, {useEffect, useState} from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import {getAllClubEvents} from "../api";
import './Feed.css'


const Feed = ({clubId, isPresident}) => {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllClubEvents(clubId)
      .then(({data}) => {
        setEvents(data.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [clubId])


  const posts = events.map(({ _id, title, imageURL, date, addedBy }) => (
    <Post
      profilePic="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
      message={title}
      timestamp={new Date(date).getTime()}
      imageURL={imageURL}
      username={addedBy}
      isPresident={isPresident}
      id={_id}
    />
  ));

  return (
    <div className="feed">
      {isPresident && <CreatePost clubId={clubId} className='create-post'/>}
      {isLoading ? (<div>Events are getting loaded!</div>) : (<div className='post'>{posts}</div>)}
    </div>
  );
};

export default Feed;
