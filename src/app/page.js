"use client"
import ChatApp from '@/components/ChatApp'
import React, { useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState([]);
  return (
    <div>
      <ChatApp setMessages={setMessages} messages={messages}></ChatApp>
    </div>
  )
}
