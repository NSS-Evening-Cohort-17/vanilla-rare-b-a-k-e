import React from 'react'
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom';
import { deletePost } from '../modules/PostManager';
export const PostCard = ({ post, user, setAllPosts, handleClick}) => {
import "./../style/postcard.css"

  const postId = post.id
  const remoteURL = "http://localhost:8088"

  const history = useHistory();

  // const handleClick = (method) => {
  //   if (method === 'delete') {
  //     deletePost(post.id).then(setAllPosts())
  //     history.push('/');
  //   }
  //   if (method === 'update') {
  //     // setUpdatePost(post);
  //     history.push('/');
  //   }
  // };

  return (
    <div  className='card'>
      <Card >
        <CardImg
          className='card__img'
          alt={`post image ${post.title}`}
          src={post.image_url}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            <Link to={`home/` + post.id}>
            {post.title}
            </Link>
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {post.username}
          </CardSubtitle>
          <CardText>
            {post.content}
          </CardText>
          <Button className='card__btn' onClick={post.id}>
            Edit
          </Button>
          <Button onClick={() => handleClick('delete')}>
          <Button className='card__btn' onClick={setAllPosts}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
