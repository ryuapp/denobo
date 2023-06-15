import * as React from 'react';
export default function ChatCard({
  id,
  name,
  body,
  createdAt,
}: {
  id: number;
  name: string;
  body: string;
  createdAt: string;
}) {
  return (
    <article id={String(id)} className="border-b">
      <div className="md:flex justify-between mb-2">
        <div className="flex">
          <div>{String(id) + '.' +name}</div>
        </div>
        <time
          className="text-xs md:text-sm text-gray-500"
          dateTime={new Date(createdAt).toString()}
        >
          {new Date(createdAt).toString()}
        </time>
      </div>
      <div>{body}</div>
    </article>
  );
}
