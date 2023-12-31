import * as React from 'react'
import { Form } from '@remix-run/react'

export default function ChatInput() {
  return (
    <Form method='post' reloadDocument>
      <label htmlFor='name' className='text-md'>
        Your name
      </label>
      <input
        id='name'
        type='text'
        name='name'
        className='border px-2 py-1 block'
        maxLength={20}
      />
      <label htmlFor='body' className='text-md'>
        Comment
      </label>
      <textarea
        id='body'
        name='body'
        className='border px-2 py-1 w-24 min-w-full h-20 mb-2 block'
        maxLength={255}
      />
      <button type='submit' className='border px-2 w-20 h-8 hover:bg-gray-200'>
        <div className='flex justify-center gap-1'>
          <div>Submit</div>
        </div>
      </button>
    </Form>
  )
}
