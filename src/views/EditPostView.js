import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import { getSingleArtist } from '../api/data/artists';

export default function EditPost() {
  const [editPost, setEditPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    getSinglePost(id).then((post) => {
      if (isMounted) setEditPost(post);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Form post={editPost} />
    </>
  );
 }