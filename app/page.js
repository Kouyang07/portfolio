// pages/index.js

'use client'

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero />
            <Skills />
        </main>
    );
}
