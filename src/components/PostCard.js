import React from 'react'
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { useHistory } from 'react-router-dom';
import { deletePost } from '../modules/PostManager';
import "./../style/postcard.css"


export const PostCard = ({ postObj, user, setAllPosts, setUpdatePost, handleDeletePost }) => {
  const remoteURL = "http://localhost:8088"
  const history = useHistory();

  const handleClick = (method) => {
    if (method === 'delete') {
      console.warn('delete');
      history.push('/');
    }
    if (method === 'update') {
      setUpdatePost(postObj);
      console.warn('card'+ postObj);
      history.push(`/editpost/`+ postObj.id);
    }
  };

  return (
    <div  className='card'>
      <Card >
        <CardImg
          alt={`post image ${postObj.title}`}
          src={postObj.image_url}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            <Link to={`home/` + postObj.id}>
            {postObj.title}
            </Link>
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {postObj.username}
          </CardSubtitle>
          {/* <CardText>
            {postObj.content}
          </CardText> */}
          <button
            onClick={() => handleClick('update')}
            className="card__btn"
            type="button"
            id={postObj.id}
          >
            EDIT
          </button>
          <button
            // onClick={() => handleClick('delete')}
            onClick={() => handleDeletePost(postObj.id)}
            className="card__btn"
            type="button"
          >DELETE
          </button>
        </CardBody>
      </Card>
    </div>
  )
}
