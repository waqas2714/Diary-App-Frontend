import React from "react";
import styles from "../styles/styles.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import {format} from 'date-fns';
import { usePostContext } from "../hooks/usePostContext";
import { useAuthContext } from "../hooks/useAuthContext";

const PostHead = ({ post }) => {
  const {dispatch} = usePostContext();
  const {user} = useAuthContext();
    const handleClick = async()=>{
        const response = await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{headers:{"Authorization" : `Bearer ${user.token}`}});
        if (response.status === 200) {
            dispatch({type : 'DELETE_POST', payload : response.data})
            console.log("Post deleted.");
        }
    }
  return (
    <li>
      <span className={styles.postHeadHeader}>
        <h2>
          <Link to={`/post/${post._id}`} >{post.title}</Link>
        </h2>
        <span class="material-symbols-outlined" onClick={handleClick}>delete</span>
      </span>
      <div>{ format(new Date(post.date), 'MMMM d, y') }</div>
      <p>{post.content.substring(0,100) + '...'}</p>
    </li>
  );
};

export default PostHead;
