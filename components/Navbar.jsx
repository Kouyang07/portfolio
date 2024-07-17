'use client'

import { useEffect, useState } from "react";

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav
            className={`bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl border-b border-opacity-20 border-blue-500 fixed w-full z-50 transition-transform duration-300 ${
                visible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 to-cyan-400 animate-text">
                            Kaicheng
                        </span>
                    </a>
                    <div className="hidden md:flex space-x-8">
                        <a href={"/"} className="nav-link">Home</a>
                        <a href={"/projects"} className="nav-link">Projects</a>
                        <a href="#" className="nav-link">CV</a>
                        <a href="#" className="nav-link">Contact</a>
                    </div>
                    <button className="md:hidden text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
