'use client'

import React from 'react';
import { motion } from "framer-motion";

const projects = [
    {
        name: "Portfolio Website",
        type: "Web Development",
        tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
        date: "2024-07-01",
        description: "Designed and developed an interactive portfolio to showcase projects and achievements.",
        github: "https://kouyang.dev/"
    },
    {
        name: "Badminton Player Localization",
        type: "Research & Computer Vision",
        tech: ["Python", "OpenCV", "PyTorch", "NumPy", "Scikit-learn"],
        date: "2024-03-01",
        description: "Developed a vision system to extract real-world player coordinates from video footage, applying Kalman filtering and sensor fusion techniques.",
        github: "https://github.com/Kouyang07"
    },
    {
        name: "Burble - Ecommerce Platform",
        type: "Full Stack Development",
        tech: ["Next.js", "Spring Boot", "Stripe", "Tailwind CSS"],
        date: "2023-10-01",
        description: "Built an online ecommerce platform integrating payment systems and order processing.",
        github: "https://github.com/Kouyang07"
    },
    {
        name: "FIRST Robotics Competition (FRC) Codebase",
        type: "Robotics",
        tech: ["Java", "WPILib", "AdvantageKit"],
        date: "2023-11-01",
        description: "Developed autonomous and control systems for FRC Team 2872, including auto-alignment, vision-based localization, and simulation training.",
        github: "https://github.com/WheatleyCybercats"
    }
];

export default function Page() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <motion.header
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mt-12">
                        KAICHENG OUYANG
                    </h1>
                    <p className="text-xl text-gray-300">Software Engineer & Robotics Enthusiast</p>
                    <p className="text-sm text-gray-400">Roslyn Heights, NY | 516-904-6879 | kaicheng@kouyang.dev</p>
                </motion.header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-400">ABOUT ME</h2>
                            <p className="text-gray-300">
                                I am a robotics enthusiast, clarinetist, and passionate engineer dedicated to pushing technological boundaries. My projects span from robotics and computer vision to full-stack development.
                            </p>
                        </section>

                        <section className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-400">NOTABLE PROJECTS</h2>
                            <div className="space-y-6">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        className="border-l-4 border-blue-500 pl-4 py-2"
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <h3 className="text-xl font-medium text-purple-400">{project.name}</h3>
                                        <p className="text-sm text-gray-400">{project.type} • {project.date}</p>
                                        <p className="mt-1 text-gray-300">{project.description}</p>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">GitHub Repository</a>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <section className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-400">SKILLS</h2>
                            <ul className="list-disc list-inside text-gray-300">
                                <li>Java, Python, JavaScript</li>
                                <li>React.js, Next.js, Tailwind CSS</li>
                                <li>PostgreSQL, MongoDB</li>
                                <li>GitHub, CloudFlare</li>
                            </ul>
                        </section>

                        <section className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-400">EDUCATION</h2>
                            <div>
                                <h3 className="text-xl font-medium text-gray-300">The Wheatley School</h3>
                                <p className="text-sm text-gray-400">Expected Graduation: June 2026</p>
                                <p className="text-sm text-gray-400">Courses: AP Computer Science A, AP Physics 1, AP Calculus BC</p>
                            </div>
                        </section>

                        <section className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-400">AWARDS</h2>
                            <ul className="text-gray-300">
                                <li>NY Open Badminton 2024 Consolation Finalist</li>
                                <li>USACO Silver Level Qualifier</li>
                                <li>St. Joseph’s Coding Competition Runner-Up</li>
                                <li>FRC Quality Award</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}