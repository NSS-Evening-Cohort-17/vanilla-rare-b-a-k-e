import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { addPost, updatePost } from "../modules/PostManager";


export const PostForm = ({ postObj }) => {

    const sessionUserId = localStorage.getItem("rare_userId")
    const userId =  parseInt(sessionUserId)
    const history = useHistory();

    const [postInput, setPostInput] = useState({
		user_id: userId,
        id: "",
        category_id: 1,
        title: "",
		publication_date: Date.now(),
		image_url: "",
		content: "", 
        approved: true,
	});

    useEffect(() => {
        if (postObj.id) {
            setPostInput({
                user_id: userId,
                id: postObj.id,
                category_id: 1,
                title: postObj.title,
                publication_date: postObj.publication_date,
                image_url: postObj.image_url,
                content: postObj.content, 
                approved: postObj.approved,
            });
        }
    }, [postObj]);

    const handleControlledInputChange = (event) => {
		const newPost = { ...postInput }
		let selectedVal = event.target.value
        console.log(event)
		if (event.target.id.includes("_id")) {
			selectedVal = parseInt(selectedVal)
		}
		newPost[event.target.id] = selectedVal
        console.log('next selected val', selectedVal)
		setPostInput(newPost)
        console.log('newPost', newPost)
        
	}

    const handleClickSavePost = (event) => {
		event.preventDefault();
        if (postObj.id) {
            updatePost(postInput).then(() => {
                resetForm();
                history.push('/');
            });
        } else {
            addPost(postInput).then(() => {
                resetForm();
                history.push('/')
            })
            
        }

	}

    return (
        <>
        <form onSubmit={handleClickSavePost}>
            <h1>{postObj.id ? 'Edit Post' : 'Create A Post'}</h1>
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                id="title" 
                onChange={handleControlledInputChange} 
                required
                value={postInput.title} />

            <label htmlFor="image">Image URL</label>
            <input 
                type="url" 
                id="image_url" 
                onChange={handleControlledInputChange} 
                required
                value={postInput.image_url} />

            <label htmlFor="content">Content</label>
            <input 
                type="text" 
                id="content" 
                onChange={handleControlledInputChange} 
                required
                value={postInput.content} />    

            <button className="btn-outline-dark btn-styling" type="submit">
                {postObj.firebaseKey ? 'UPDATE' : 'SUBMIT'}
            </button>    
        </form>
        </>
    )
}
PostForm.propTypes ={
    postObj: PropTypes.shape({
        user_id: PropTypes.string,
        id: PropTypes.string,
        category_id: PropTypes.string,
        title: PropTypes.string,
        publication_date: PropTypes.string,
        image_url: PropTypes.string,
        content: PropTypes.string, 
        approved: PropTypes.bool,
    })
}
PostForm.defaultProps = { postObj: {} };
