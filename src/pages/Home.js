import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/styles.module.scss'
import PostHead from '../components/PostHead';
import NavBar from '../components/NavBar';
import PostForm from '../components/PostForm';
import { usePostContext } from '../hooks/usePostContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
    const {posts, dispatch} = usePostContext();
    const {user} = useAuthContext();
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:5000/api/posts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) dispatch({ type: 'SET_POSTS', payload: json });
        }

        if (user) fetchPosts();
    }, [user, dispatch, posts]);
    


  return (
    <>
    <NavBar />
    <main>
    <div>
        <h1>Posts</h1>
        <ul className={styles.postList}>
            {posts && posts.map((post) => {
                return <PostHead key={post._id} post={post} /> 
            })}
        </ul>
    </div>

    <div>
        <PostForm />
    </div>
    </main>
    </>
  )
}

export default Home