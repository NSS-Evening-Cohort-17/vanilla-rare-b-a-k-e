import React, { useState, useEffect } from 'react'
import { PostCard } from '../components/PostCard'
import { getAllPosts } from '../modules/PostManager';

export const HomeView = ({user}) => {
    const [posts, setAllPosts] = useState([]);

    // useEffect(() => {
    //     // let isMounted = true;
    //     console.warn(`warning 1 ${posts}`);
    //     getAllPosts().then(setAllPosts)
    //     console.warn(posts);
    //         // (postArray) => {
    //         // // if (isMounted) 
    //         // setAllPosts(postArray);
    //     // });

    //     // return () => {
    //     //     isMounted = false;
    //     // };
    // }, []);
    const getPosts = () => {
        getAllPosts().then(dataFromAPI => {setAllPosts(dataFromAPI)
            console.warn(dataFromAPI);
        });
    };
    
    useEffect(() => {
        getPosts()
        console.warn(posts);
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
