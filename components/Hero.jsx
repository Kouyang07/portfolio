'use client'

import React, { useState, useEffect } from 'react';

export default function Hero() {
    const [text, setText] = useState('');
    const fullText = "Full Stack Software Engineer";

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="hero relative overflow-hidden h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text animate-fadeInDown leading-tight pb-2">
                    Hi, I'm Kaicheng
                </h1>
                <p className="text-2xl md:text-3xl mb-10 text-blue-200 animate-fadeIn h-8"
                   style={{animationDelay: '0.5s'}}>
                    {text}
                </p>
                <button
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 animate-fadeIn animate-bounce"
                    style={{animationDelay: '1s'}}
                >
                    Explore My Work
                </button>
            </div>
        </section>
    );
}