// pages/index.js

'use client'

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <motion.div
                style={{ opacity, scale }}
                className="w-full"
            >
                <Hero />
            </motion.div>
            <Skills />
        </main>
    );
}