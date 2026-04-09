"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);

  console.log("I run on server. ???");

  const router = useRouter();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
