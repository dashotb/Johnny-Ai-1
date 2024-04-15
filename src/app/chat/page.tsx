"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {useChat} from "ai/react"

export default function page() {
const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="p-4">
              <h3 className="font-semibold">AI Response:</h3>
              <ul>
                  {messages.map((m, index) => (
                      <li key={index} className="text-gray-500 dark:text-gray-400">
                          {m.role === 'user' ? 'User: ' : 'AI: '}
                          {m.content}
                      </li>
                  ))}
              </ul>
          </div>
          <form className="grid gap-4 md:gap-6 mt-96" onSubmit={handleSubmit}>
              <Input id="question" placeholder="Type your question here..." value={input} onChange={handleInputChange} />
              <div className="flex justify-center">
                  <Button type="submit" className="w-32 flex justify-center">Ask AI</Button>
              </div>
          </form>
      </main>
  )
}
