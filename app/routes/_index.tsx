import * as React from "react";
import type { V2_MetaFunction } from "@remix-run/deno";
import { ChatInput } from "../components/ChatInput.tsx";
import { ChatList } from "../components/ChatList.tsx";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deno BBS" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="mx-auto max-w-5xl mt-2 font-mono">
      <h1 className="text-3xl font-bold">Deno BBS</h1>
      <p className="mb-4">You are free to speak as long as you respect others.</p>
      <ChatInput />
      <ChatList />
    </div>
  );
}
