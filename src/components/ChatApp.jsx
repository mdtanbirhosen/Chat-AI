"use client";

import { fetchChatResponse } from "@/app/api/echogpt";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import DefaultMessage from "./DefaultMessage";

export default function ChatApp({setMessages,messages}) {
  
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Load chat history from localStorage 
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatHistory");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      setMessages([{ text: "Hello! How can I assist you today?", sender: "bot" }]);
    }
  }, []);

  // Save chat history to localStorage 
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetchChatResponse(newMessages);
      const aiReply = response.choices[0]?.message?.content || "I couldn't process that.";

      setMessages([...newMessages, { text: aiReply, sender: "bot" }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Error fetching response.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-base-200">
      {/* Side bar */}
      <Sidebar setMessages={setMessages} />

      {/* Chat Box */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex-1 overflow-y-auto p-4 bg-base-100 shadow-sm rounded-box">
          {/* show if there are no chat */}
          {messages.length === 0 && <DefaultMessage/>}
          
          {messages &&
          messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-3 py-1 rounded-lg ${msg.sender === "user" ? "bg-primary text-white" : "bg-neutral text-white"}`}>
                {msg.text}
              </span>
            </div>
          ))}
          {loading && <p className="text-center text-gray-500">Typing...</p>}
        </div>

        {/* Input Field */}
        <div className="mt-4 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="input flex-1 !outline-none border-none"
          />
          <button onClick={sendMessage} type="submit" className="btn bg-[#F2E2B1] text-[#817963] hover:bg-[#D5C7A3]" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
