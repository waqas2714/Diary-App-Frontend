import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import styles from "../styles/styles.module.scss";
import { useAuthContext } from '../hooks/useAuthContext';
import { format } from 'date-fns';

const DiaryPost = () => {
    const [post,setPost] = useState(null);
    const {id} = useParams();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            const json = await response.json();
            if (response.ok) setPost(json);
        };

        if (user) fetchPost();
    }, [user, id]);

    if (!post) {
        return null;
    }
  return (
    <>
        <NavBar />
        <div className={styles.diaryPost} style={{marginTop: "38px", padding: "11px"}}>
            <h2>{post.title}</h2>
            <div>{format(new Date(post.date), 'MMMM d, y')}</div>
            <p>{post.content}</p>
        </div>
    </>
  )
}

export default DiaryPost