"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);

  console.log("I run on server. ???");

  const router = useRouter();

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>

      <Button variant="outline" onClick={() => router.back()}>
        Back
      </Button>
    </div>
  );
}
