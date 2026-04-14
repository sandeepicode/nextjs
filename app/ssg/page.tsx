import React from 'react'

const page = async () => {
  const data = await fetch("https://dummyjson.com/posts");
  const post = await data.json();
  const readTime = new Date(Date.now()).toLocaleString();

  return (
    <div>
      <h1>SSG Page</h1>
      <div>SSG: {post.posts.length}</div>
      <div>{readTime}</div>
    </div>
  )
}

export default page