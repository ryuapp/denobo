/// <reference lib="deno.unstable" />

export const getPostList = async () => {
  const kv = await Deno.openKv();
  const countKv = await kv.get(["count"])
  // deno-lint-ignore no-inferrable-types
  let count:number = Number(countKv.value)
  if(!count){
    count = 1;
  }
  const posts = [];
  let res;
  for(let i = count;i>0;i--){
    res = await kv.get(["users", i])
    //console.log(res)
    posts.push(res)
  }
  return posts
}

export const getChatList = async () => {
  const kv = await Deno.openKv();
  const iter = kv.list<string>({ prefix: ['users'] });
  const users = [];
  for await (const res of iter) users.push(res);
  return users;
};
export const createChat = async () => {
  const kv = await Deno.openKv();
  const now = Date.now();
  const countKv= await kv.get(["count"])
  
  // deno-lint-ignore no-inferrable-types
  let count: number = Number(countKv.value);
  if(!countKv.value){
    await kv.set(["count"], 1)
    count = 1;
  }
  const item = {
    id: count,
    name: 'Taro',
    body: 'Hello!',
    createdAt: now,
  };
  await kv.set(['users', count], item);
  await kv.set(["count"], count+1)
  return true;
};
