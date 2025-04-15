'use client'

import { useEffect, useState } from "react";

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`bg-black/70 backdrop-filter backdrop-blur-xl border-b border-blue-500/30 fixed w-full z-50 transition-all duration-300 ${
                visible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href={"/"} className="text-3xl font-extrabold tracking-tight relative group">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text">
                            Kaicheng
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <div className="hidden md:flex items-center space-x-10">
                        <a href={"/"} className="text-gray-200 hover:text-white font-medium transition duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300">Home</a>
                        <a href={"/projects"} className="text-gray-200 hover:text-white font-medium transition duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300">Projects</a>
                    </div>
                    <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg text-white focus:outline-none hover:bg-white/10 transition duration-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ?
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> :
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            }
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-2 text-right space-y-3 animate-fadeIn">
                        <a href={"/"} className="block py-2 text-gray-200 hover:text-white font-medium transition duration-200">Home</a>
                        <a href={"/projects"} className="block py-2 text-gray-200 hover:text-white font-medium transition duration-200">Projects</a>
                    </div>
                )}
            </div>
        </nav>
    )
}