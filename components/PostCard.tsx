"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "./Modal";
import { useState } from "react";

const PostCard = (post: { id: number; title: string; body: string }) => {

    const [isOpen, setIsOpen] = useState(false);


  console.log("post", post);
  return (
    <div>
      <div className="mt-4 flex justify-between gap-2">
        <h2>{post.title.substring(0, 50)}</h2>
        <Button onClick={() => setIsOpen(true)}>Read More</Button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} title={post.title} description={`User id : ${post.id}`}>
        <div>{post.body}</div>
      </Modal>
    </div>
  );
};

export default PostCard;
