"use client"

import { usePathname } from "next/navigation"
import logo from "@/assets/logo.png"
import Image from "next/image";
import SidebarContent from "./SidebarContent";
export default function Navbar({setMessages}) {
    const pathname = usePathname();
    console.log(pathname)
    if (pathname === "/signIn") return
    return (
        <div className="navbar  shadow-sm">
            <div className="navbar-start">
                {/* drawer start here */}

                <div className="drawer w-fit lg:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn bg-[#F2E2B1] text-[#817963] hover:bg-[#D5C7A3] drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg></label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 overflow-auto">
                            <SidebarContent setMessages={setMessages}/>
                        </ul>
                    </div>
                </div>
                {/* drawer end here */}
                <a className="btn btn-ghost pointer-events-none text-xl"><Image src={logo} height={50} width={50} alt="logo" /> CHAT.AI</a>
            </div>

            <div className="navbar-end">
                <button className="btn bg-[#F2E2B1] text-[#817963] hover:bg-[#D5C7A3]">Login</button>
            </div>
        </div>
    )
}
