import React, { useState, useEffect }  from "react"
import { getPostsByUser } from "../modules/PostManager"
import { PostCard } from "./PostCard"

export const MyPosts = ( {user}) => {

    const sessionUserId = localStorage.getItem("rare_userId")
    const userId =  parseInt(sessionUserId)

    const [myPosts, setMyPosts] = useState([])

    const getMyPosts = () => {
        getPostsByUser(userId).then(dataFromAPI => {
            setMyPosts(dataFromAPI)
            console.log(dataFromAPI)
        });
    }

    useEffect(() => {
        getMyPosts()
    }, []);

    return (
        <>
        <div>
        {myPosts.map((post) => (
            <PostCard
                key={post.id}
                post={post}
                user={user}
                setMyPosts={setMyPosts}
            />
        ))}
        </div>
        </>
    )
}