import React from 'react'
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom';


export const PostCard = ({post, user, setAllPosts, setUpdatePost}) => {
  const postId = post.id
  const remoteURL = "http://localhost:8088"
  const history = useHistory();

  const handleClick = (method) => {
    if (method === 'delete') {
      console.warn('delete');
      setAllPosts();
      history.push('/posts');
    }
    if (method === 'update') {
      setUpdatePost(post);
      history.push('/posts');
    }
  };


  return (
    <div>PostCard
      <Card>
        <CardImg
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
            {user.username}
          </CardSubtitle>
          <CardText>
            {post.content}
          </CardText>
          <Button onClick={() => handleClick('update')}>
            Edit
          </Button>
          <Button onClick={() => handleClick('delete')}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
