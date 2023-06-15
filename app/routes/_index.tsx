import * as React from 'react';
import type { LoaderFunction } from '@remix-run/deno';
import { useLoaderData } from '@remix-run/react';
import type { V2_MetaFunction } from '@remix-run/deno';
import { ChatInput } from '../components/ChatInput.tsx';
import ChatCard from '../components/ChatCard.tsx';
import { createChat, getPostList } from '../utils/db.server.ts';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Deno BBS' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export const loader: LoaderFunction = async () => {
  const postList = await getPostList();
  return postList;
};

export default function Index() {
  const postList = useLoaderData();
  return (
    <div className="mx-auto max-w-5xl mt-2 font-mono">
      <h1 className="text-3xl font-bold">Deno BBS</h1>
      <p className="mb-4">
        You are free to speak as long as you respect others.
      </p>
      <ChatInput />
      <ul className="grid grid-cols-1 gap-4 my-4">
        {postList.map(
          (item: {
key: number;
            value: { id: number,name: string; body: string; createdAt: string };
          }) => (
            <ChatCard
              key = {item.key}
              id = {item.value.id}
              name={item.value.name}
              body={item.value.body}
              createdAt={item.value.createdAt}
            />
          )
        )}
      </ul>
    </div>
  );
}
