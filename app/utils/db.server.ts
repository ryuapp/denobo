/// <reference lib="deno.unstable" />

export const getPosts = async () => {
  const kv = await Deno.openKv()
  const entries = kv.list({ prefix: ['posts'] })
  const posts = []
  for await (const entry of entries) {
    posts.push(entry.value)
  }
  return posts.reverse()
}
export const createPost = async (name: string, body: string) => {
  const kv = await Deno.openKv()
  const now = Date.now()
  let count = Number(await (await kv.get(['count'])).value)
  if (!count) {
    await kv.set(['count'], 1)
    count = 1
  }

  const postData = {
    id: count,
    name: name,
    body: body,
    createdAt: now,
  }

  await kv.set(['posts', count], postData)
  await kv.set(['count'], count + 1)
  return true
}
