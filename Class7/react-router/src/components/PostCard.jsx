import React from 'react'
import { Link } from 'react-router-dom';
export default function PostCard({post}) {
  return (
    <div className="post-card">
      <Link to={`./${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.body}</p>
    </div>
  );
}
