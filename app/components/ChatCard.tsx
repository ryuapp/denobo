import * as React from "react";
export default function ChatCard({
  name,
  body,
  createdAt,
}: {
  name: string;
  body: string;
  createdAt: string;
}) {
  return (
    <li className="border-b">
      <div className="flex justify-between mb-2">
        <div>{name}</div>
        <time dateTime={createdAt}>{createdAt}</time>
      </div>
      <div>{body}</div>
    </li>
  );
}
