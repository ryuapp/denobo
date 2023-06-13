import * as React from "react";
export function ChatInput() {
  return (
    <div>
      <p className="text-md">Your name</p>
      <input className="border" />
      <p className="text-md">Content</p>
      <textarea className="border w-24 min-w-full h-20 mb-2"></textarea>
      <button className="border px-2 hover:bg-gray-200">Submit</button>
    </div>
  );
}
