import { Button } from "@/components/ui/button";
import Link from "next/link";
import Login from "../components/Login";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const data = await fetch("https://dummyjson.com/posts");
  const post = await data.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

    {/* // Posts */}
    <div className="mt-3 border mx-4 p-8">
      <h1 className="text-2xl font-bold">Posts</h1>
      {post.posts.slice(0, 5).map((post: { id: number; title: string; body: string }) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>


      {/* login  */}
      <div className="mt-3 border mx-4 p-8">
        <h1 className="text-2xl font-bold">Login here</h1>
        <Login post={post} />
      </div>
    </div>
  );
}
