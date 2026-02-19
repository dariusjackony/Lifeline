"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar(){
    const [ isOpen, setIsOpen ] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return(
        <nav className="bg-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div>
                        <img src="/lifeline.png" className="w-20"/>
                    </div>
                    {/* desktop menu */}
                    <div className="hidden md:flex space-x-6 text-white">
                        <Link href="/">Home</Link>
                        <Link href="/">Home</Link>
                        <Link href="/">Home</Link>
                        <Link href="/">Home</Link>
                        <Link href="/">Home</Link>
                    </div>
                    {/* mobile humberger */}
                    <div className="md:hidden text-white">
                        <button onClick={toggleMenu}
                         className="">
                         {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden text-white px-2 pt-2 pb-4 space-y-1">
                    <Link href="/" className="block px-2 py-1">Home</Link>
                    <Link href="/" className="block px-2 py-1">Home</Link>
                    <Link href="/" className="block px-2 py-1">Home</Link>
                    <Link href="/" className="block px-2 py-1">Home</Link>
                    <Link href="/" className="block px-2 ">Home</Link>
                </div>
            )}
        </nav>
    )
}