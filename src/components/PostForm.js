import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';


const initialState = {
  id: '',
  userId: '',
  title: '',
  publicationDate: '',
  imageUrl: '',
  content: '',
};

export default function PostForm({ post }) {
  const [formInput, setFormInput] = useState({
    ...initialState,
  });
  const history = useHistory();

  useEffect(() => {
    if (post.id) {
      setFormInput({
        id: post.id,
        userId: post.userId,
        title: post.title,
        publicationDate: post.publicationDate,
        imageUrl: post.imageUrl,
        content: post.content,
      });
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();f
    if (post.id) {
      updatePost(formInput).then(() => {
        resetForm();
        // history.push('/postdetails');
      });
    } else {
      createPost(formInput).then(() => {
        resetForm();
        // history.push('/postdetails');
    });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title">{post.id ? 'EDIT' : 'CREATE A'} POST</h2>
      <h5 className="form-title">
        {post.id
          ? 'Update post below!'
          : 'Add post below!'}
      </h5>
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="title"
        id="title"
        value={formInput.title}
        onChange={handleChange}
        placeholder="TITLE"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="content"
        id="content"
        value={formInput.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        name="imageUrl"
        id="imageUrl"
        value={formInput.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <button className="btn-outline-dark btn-styling" type="submit">
        {post.id ? 'UPDATE' : 'SUBMIT'}
      </button>
    </form>
  );
}

PostForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    title: PropTypes.string,
    publicationDate: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
  }),
};

PostForm.defaultProps = { post: {} };
