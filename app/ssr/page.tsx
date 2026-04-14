import React from "react";

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  const posts = await res.json();
  const readTime = new Date(Date.now()).toLocaleString();

  return (
    <div>
      <div>SSR: {posts.length}</div>
      <div>{readTime}</div>
    </div>
  );
}

export default page;
