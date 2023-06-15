/// <reference lib="deno.unstable" />

export const getPosts = async () => {
  const kv = await Deno.openKv()
  const countKv = await kv.get(['count'])
  let count = Number(countKv.value)
  if (!count) {
    await kv.set(['count'], 1)
    return false
  }
  const posts = []
  let res
  for (let i = count - 1; i > 0; i--) {
    res = await kv.get(['posts', i])
    posts.push(res)
  }
  return posts
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
