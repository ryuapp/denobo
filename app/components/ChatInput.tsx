import * as React from "react";
export function ChatInput() {
  return (
    <div>
      <p className="text-md">Your name</p>
      <input 
        type="text"
        className="border px-2 py-1" 
        maxLength={20}
      />
      <p className="text-md">Content</p>
      <textarea 
        className="border px-2 py-1 w-24 min-w-full h-20 mb-2"
        maxLength={255}
      />
      <button className="border px-2 hover:bg-gray-200">Submit</button>
    </div>
  );
}
