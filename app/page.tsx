import { Button } from "@/components/ui/button";
import Link from "next/link";
import Login from "../components/Login";
import PostCard from "@/components/PostCard";

export default async function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* login  */}
      <div className="mt-3 border mx-4 p-8">
        <h1 className="text-2xl font-bold">Login here</h1>
        <Login />
      </div>
    </div>
  );
}
