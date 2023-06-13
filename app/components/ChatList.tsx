import ChatCard from './ChatCard.tsx';

export function ChatList() {
  return (
    <ul className="grid grid-cols-1 gap-4 my-4">
      <ChatCard
        name="ryu"
        body="This BBS is interesting and old."
        createdAt="2023-06-17T03:24:00"
      />
    </ul>
  );
}
