import React from 'react'
import PostCard from './PostCard';

const posts = [
    {id: 1, title: "Post 1", excerpt: "Post 1 excerpt"},
    {id: 2, title: "Post 2", excerpt: "Post 2 excerpt"},
    {id: 3, title: "Post 3", excerpt: "Post 3 excerpt"},
    {id: 4, title: "Post 4", excerpt: "Post 4 excerpt"},
    {id: 5, title: "Post 5", excerpt: "Post 5 excerpt"},
];


export default function PostList() {
  return (
    <div className='post-list'>
        {posts.map((el) => <PostCard key={el.id} post={el}/>)}
    </div>
  )
}
