import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-14 px-2 bg-purple-700 flex justify-between items-center text-white '>
            <div className='logo font-bold text-xl'>
                
                <Link href="/">Bitlinks</Link>
            </div>
            <ul className='flex gap-3.5 justify-center items-center text-white'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/shorten">Shorten</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li className='flex gap-2.5'>
                   <Link href="/shorten"> <button className='bg-purple-500 shadod-lg p-1 font-bold rounded-lg'>Try Now</button></Link>
                    <Link href="/Github"><button className='bg-purple-500 shadod-lg p-1 font-bold rounded-lg'>Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
