import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostForm } from '../components/PostForm';
import { getPostById } from '../modules/PostManager';

export default function EditPost() {
  const [editPostObj, setEditPostObj] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    getPostById(id).then((post) => {
      if (isMounted) setEditPostObj(post);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <PostForm postObj={editPostObj} />
    </>
  );
 }