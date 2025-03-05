"use client";

import { fetchChatResponse } from "@/app/api/echogpt";
import { useState } from "react";
import Sidebar from "./Sidebar";


export default function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // Call EchoGPT API from echoGpt.js
      const response = await fetchChatResponse(newMessages);
      const aiReply = response.choices[0]?.message?.content || "I couldn't process that.";

      // Add AI response to chat
      setMessages([...newMessages, { text: aiReply, sender: "bot" }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Error fetching response.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-base-200">
      {/* Side bar here */}
      <Sidebar></Sidebar>
      
      {/* Chat box here  */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex-1 overflow-y-auto p-4 bg-base-100 shadow-md rounded-box">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 text-${msg.sender === "user" ? "right" : "left"}`}>
              <span className={`inline-block px-3 py-1 rounded-lg ${msg.sender === "user" ? "bg-primary text-white" : "bg-neutral text-white"}`}>
                {msg.text}
              </span>
            </div>
          ))}
          {loading && <p className="text-center text-gray-500">Typing...</p>}
        </div>
        
        <div className="mt-4 flex items-center gap-2">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type a message..." 
            className="input input-bordered flex-1"
          />
          <button onClick={sendMessage} className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
