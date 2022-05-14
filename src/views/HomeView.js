import React, { useState, useEffect } from 'react'
import { PostCard } from '../components/PostCard'
import { getAllPosts } from '../modules/PostManager';

export const HomeView = ({user}) => {
    const [posts, setAllPosts] = useState([]);

    const getPosts = () => {
        return getAllPosts().then(dataFromAPI => {
            setAllPosts(dataFromAPI)
            
        });
    };
    
    useEffect(() => {
        getPosts()
    }, []);

  return (
    <div>
        {posts.map((post) => (
            <PostCard
                key={post.id}
                post={post}
                user={user}
                setAllPosts={setAllPosts}
            />
        ))}
    </div>
  )
}
