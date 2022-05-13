import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../modules/PostManager"
import { getAllUsers } from "../modules/UserManager"

export const PostDetails = () => {

    const {postId} = useParams();

    const [post, setPost] = useState([]);
    const [users, setUsers] = useState([]);
    const [author, setAuthor] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    // Calls post based on ID and sets hook
    useEffect(() => {
        getPostById(postId)
            .then(post => {
                setPost(post);
                setIsLoading(false);
            });
    }, [postId]);

    // Calls all users and sets hook
    const getUsers = () => {
        getAllUsers().then(dataFromAPI => {setUsers(dataFromAPI)
        });
    };
    
    useEffect(() => {
        getUsers()
    }, []);

    
    // Loops through all users to match the user ID to the ID of the post author, then sets that to author hook
    useEffect(() => {
        users.forEach(user => {
            if (post.user_id == user.id) {
                setAuthor(user.username)
            }}
        )
    }, [users]);


    // Changes date from yyyy-MM-dd to weekday, month date, year
    const changeDateFormat = (inputDate) => {
        let date = new Date(inputDate);
        
        return date.toLocaleString('en-US', {
            weekday: 'long', // long, short, narrow
            day: 'numeric', // numeric, 2-digit
            year: 'numeric', // numeric, 2-digit
            month: 'long', // numeric, 2-digit, long, short, narrow
            // hour: 'numeric', // numeric, 2-digit
            // minute: 'numeric', // numeric, 2-digit
            // second: 'numeric', // numeric, 2-digit
        });
       
    }



    return (
        <> 
        <h3>{post.title}</h3>
        <p>Posted by {author} on {changeDateFormat(post.publication_date)}</p>
        <p>{post.content}</p>
        </>
    )
}