import { Avatar } from '@nextui-org/react'
import React from 'react'
import './Post.css'
import {deleteEvent} from "../api";

const Post = ({id, profilePic, imageURL, username, timestamp, message, isPresident}) => {
  const handleDeletePost = () => {
    deleteEvent(id).then(console.log).catch(console.log);
  }

  return (
    <div className="post">
      <div className="post__content">
        <div className="post__top">
          <Avatar size="lg" src={profilePic} className="post__avatar" />

          <div className="post__topInfo">
            <h4>{username}</h4>
            <p>{`${new Date(parseInt(timestamp)).toDateString()} ${new Date(
              parseInt(timestamp)
            ).toLocaleTimeString()}`}</p>
          </div>
          {isPresident && (
            <button className="delete_btn" onClick={handleDeletePost}>
              Delete Post
            </button>
          )}
        </div>

        <div className="post__bottom">
          <p>{message}</p>
          {/* image section */}
        </div>
        <img src={imageURL} alt={message} className="post__image" />
      </div>
    </div>
  );
}

export default Post
