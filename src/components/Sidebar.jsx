import React from 'react'
import SidebarContent from './SidebarContent'

export default function Sidebar({setMessages}) {
  return (
    <div className="w-1/4 border-r bg-base-100 hidden lg:flex">
      <ul className="menu bg-base-200 text-base-content min-h-full w-full overflow-auto">
        <SidebarContent setMessages={setMessages}/>
      </ul>
    </div>
  )
}
