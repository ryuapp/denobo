import * as React from "react";
export default function ChatCard({
  id,
  name,
  body,
  createdAt,
}: {
  key:number,
  id: number
  name: string;
  body: string;
  createdAt: string;
}) {
  return (
    <li id={String(id)} className="border-b">
      <div className="md:flex justify-between mb-2">
        <div>{name}</div>
        <time className="text-sm text-gray-500" dateTime={new Date(createdAt).toString()}>{new Date(createdAt).toString()}</time>
      </div>
      <div>{body}</div>
    </li>
  );
}
