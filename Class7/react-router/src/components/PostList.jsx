import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostList() {
  const posts = useLoaderData();
  return (
    <div className="post-list">
      {posts.map((el) => (
        <PostCard key={el.id} post={el} />
      ))}
    </div>
  );
}

export const listPostLoader = () =>
  fetch("https://jsonplaceholder.typicode.com/posts");
