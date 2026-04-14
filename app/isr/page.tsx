import React from 'react'

async function page() {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: { revalidate: 10 },
    }
  );

  const posts = await (async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const data = await res.json();
    return data;
  })();

  // console.log("ISR posts  : ", posts);
    const readTime = new Date(Date.now()).toLocaleString();




  return (
    <div>
      <h1>ISR Page : {posts.length}</h1>
      <div>{readTime}</div>
    </div>
  )
}

export default page
