import { Button } from "@/components/ui/button";
import Link from "next/link";
import Login from "../components/page";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await data.json();
  console.log(post);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold">Home page</h1>
      <Button variant="outline" asChild>
        <Link href="/about">About</Link>
      </Button>

      {post.title}




      <div className="mt-3 border mx-4 p-8">
        <h1 className="text-2xl font-bold">Login here</h1>
        <Login post={post} />
      </div>
    </div>
  );
}
