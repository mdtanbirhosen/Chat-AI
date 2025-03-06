import React from 'react'
import logo from "@/assets/logo.png"
import Image from 'next/image'
export default function DefaultMessage() {
    return (
        <div className='text-black flex items-center justify-center h-full'>
            <div className='flex items-center justify-center flex-col'>
                <Image src={logo} height={100} width={100} alt='logo' />
                <h2>Hey there!!! What's up?</h2>
            </div>
        </div>
    )
}
