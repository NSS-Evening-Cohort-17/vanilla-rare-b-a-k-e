import React from 'react'
import { Link, useParams } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export const PostCard = ({post, user, setAllPosts}) => {

  const postId = post.id
  const remoteURL = "http://localhost:8088"


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
          <Button onClick={post.id}>
            Edit
          </Button>
          <Button onClick={setAllPosts}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
