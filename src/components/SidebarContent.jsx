import React from "react";
import { Trash2, History, ShoppingCart, LayoutGrid, LifeBuoy, CreditCard, Server, MessageCircle } from "lucide-react";

export default function SidebarContent({ setMessages }) {
  // Function to clear chat history
  const clearChatHistory = () => {
    setMessages([]); // Clears chat history
  };

  return (
    <div>
      {/* New Chat Button */}
      <li>
        <button
          onClick={clearChatHistory}
          className="btn border-2 border-[#F2E2B1] hover:bg-[#F2E2B1] hover:text-[#BDB395] w-full flex items-center gap-2"
        >
          <Trash2 size={18} /> New Chat
        </button>
      </li>

      {/* Engagement Section */}
      <li className="mt-4 text-gray-500 text-sm">Engagement</li>
      <li>
        <a className="flex items-center gap-2">
          <History size={18} /> History
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2">
          <ShoppingCart size={18} /> Store
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2">
          <LayoutGrid size={18} /> AI Tasks
        </a>
      </li>

      {/* Help & Support Section */}
      <li className="mt-4 text-gray-500 text-sm">Help & Support</li>
      <li>
        <a className="flex items-center gap-2">
          <LifeBuoy size={18} /> Support
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2">
          <CreditCard size={18} /> Subscriptions
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2">
          <Server size={18} /> API Platform
        </a>
      </li>
      <li>
        <a className="flex items-center gap-2 text-blue-500">
          <MessageCircle size={18} /> Discord
        </a>
      </li>

      {/* Upgrade Section */}
      <li className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-sm font-semibold">Unlock Pro Features</h3>
        <p className="text-xs text-gray-500">
          With statistics on your shot & profile performance available to Pros.
        </p>
        <button className="btn btn-dark btn-sm mt-3 w-full">Upgrade to Pro</button>
      </li>
    </div>
  );
}
