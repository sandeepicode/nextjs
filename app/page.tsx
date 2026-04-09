import Link from 'next/link'


export default async function Home() {


    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await data.json();
  console.log(post);



  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    
    <h1>Something</h1>
    <Link href="/about">About</Link>
    {
      post.title
    }
    </div>
  );
}
