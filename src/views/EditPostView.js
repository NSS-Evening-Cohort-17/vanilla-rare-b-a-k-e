import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostForm } from '../components/PostForm';
import { getPostById } from '../modules/PostManager';

export default function EditPostView() {
  const [editPostObj, setEditPostObj] = useState({});
  const { id } = useParams();
  console.warn(id);
  

  useEffect(() => {
    let isMounted = true;
    getPostById(id).then((post) => {
      if (isMounted) setEditPostObj(post);
      console.warn(editPostObj);
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