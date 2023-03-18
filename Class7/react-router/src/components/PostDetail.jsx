import React from 'react'
import { useLoaderData} from 'react-router-dom'

export default function PostDetail() {
    const post = useLoaderData();
  return (
    <div>
      <h1>Post title: {post.title}</h1>
      <div>Writen by: {post.userId}</div>
      <p>Content: {post.body}</p>
    </div>
  )
}

export const postDetailLoader = ({params}) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
