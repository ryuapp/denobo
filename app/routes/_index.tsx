import * as React from 'react'
import { ActionArgs, ActionFunction, LoaderFunction, redirect } from '@remix-run/deno'
import { useLoaderData } from '@remix-run/react'
import type { V2_MetaFunction } from '@remix-run/deno'
import { ChatInput } from '../components/ChatInput.tsx'
import ChatCard from '../components/ChatCard.tsx'
import { createPost, getPosts } from '../utils/db.server.ts'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Denobo' },
    {
      name: 'description',
      content: 'Denobo means Deno board. A nostalgic simple internet bulletin board',
    },
  ]
}

export const loader: LoaderFunction = async () => {
  const postList = await getPosts()
  return postList
}

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const data = await request.formData()
  const name = data.get('name') ? data.get('name') : 'anonysaurs'
  const body = data.get('body') ? data.get('body') : 'I like Deno🦕!'

  await createPost(name, body)

  return redirect('/')
}

export default function Index() {
  const postList = useLoaderData()
  return (
    <div className='mx-auto max-w-5xl mt-2 font-mono'>
      <h1 className='text-3xl font-bold'>Denobo</h1>
      <p className='mb-4'>
        You are free to speak as long as you respect others.
      </p>
      <ChatInput />
      <section className='grid grid-cols-1 gap-4 my-4'>
        {postList.map(
          (item: {
            key: number
            id: number
            name: string
            body: string
            createdAt: string
          }) => (
            <ChatCard
              key={item.id}
              id={item.id}
              name={item.name}
              body={item.body}
              createdAt={item.createdAt}
            />
          ),
        )}
      </section>
    </div>
  )
}
