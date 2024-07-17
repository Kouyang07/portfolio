'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        }, 80);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="hero relative overflow-hidden h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 text-center relative z-10"
            >
                <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 leading-tight pb-2">
                    Hi, I'm Kaicheng
                </h1>
                <p className="text-2xl md:text-3xl mb-10 text-blue-200 h-8">
                    {text}
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.svg
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </motion.svg>
            </motion.div>
        </section>
    );
}