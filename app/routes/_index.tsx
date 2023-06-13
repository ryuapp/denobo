import * as React from "react";
import type { V2_MetaFunction } from "@remix-run/deno";

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
    </div>
  );
}
