// components/CV.js

'use client'

import React, {useEffect} from 'react';
import PDFDownloadButton from "@/components/cv/PDFDownloadButton";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Head from "next/head";

const projects = [
    {
        name: "FRC Robotics Crescendo",
        type: "Robotics",
        tech: ["Java", "WPILib", "Advantage-Kit"],
        date: "2024-5-31",
        description: "FRC Robotics Team 2872's code for 2022-2023 season, Crescendo",
        github: "https://github.com/WheatleyCybercats/Crescendo/tree/AdvantageKit-Rebase"
    },
    {
        name: "Monolith Plugin",
        type: "Minecraft Plugin",
        tech: ["Java", "PaperMC"],
        date: "2024-04-25",
        description: "A fun plugin built with PaperMC that added custom items/mechanics to the game.",
        github: "https://github.com/Kouyang07/Monolith"
    },
    {
        name: "FRC Robotics Charged Up",
        type: "Robotics",
        tech: ["Java", "WPILib"],
        date: "2023-10-17",
        description: "FRC Robotics Team 2872's code for 2022-2023 season, Charged Up",
        github: "https://github.com/WheatleyCybercats/ChargedUp"
    },
    {
        name: "Java Math Utilities",
        type: "Library",
        tech: ["Java"],
        date: "2022-6-14",
        description: "A set of java utilities that are created to help you solve the most daunting task in high school math courses.",
        github: "https://github.com/Kouyang07/Java-Math-Utilities"
    }
];

const FadeInWhenVisible = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
            }}
        >
            {children}
        </motion.div>
    );
};

const CV = () => {
    return (
        <>
            <Head>
                <title>Kaicheng Ouyang - Software Engineer CV</title>
                <meta name="description" content="Kaicheng Ouyang's CV - Passionate software engineer with expertise in Java, Python, and JavaScript. View projects, skills, and experience." />
                <meta name="keywords" content="Kaicheng Ouyang, Software Engineer, Java, Python, JavaScript, React, AWS, CV" />
            </Head>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
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
                        <p className="text-xl text-gray-300">Software Engineer</p>
                        <p className="text-sm text-gray-400">Roslyn Heights, United States • 5169046879 • kaicheng@kouyang.dev</p>
                    </motion.header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <FadeInWhenVisible>
                                <section className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">PROFILE</h2>
                                    <p className="text-gray-300">
                                        Passionate software engineer with a drive for turning ideas into reality. Armed with expertise in Java, Python, and JavaScript,
                                        I've crafted innovative solutions across various frameworks and cloud platforms. My determination and ambition drive me to
                                        tackle complex challenges, while my perseverance ensures I always deliver results that exceed expectations.
                                    </p>
                                </section>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible>
                                <section className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">PROJECTS</h2>
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
                                                <p className="text-sm mt-1 text-gray-400">Tech: {project.tech.join(', ')}</p>
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">GitHub Repository</a>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>
                            </FadeInWhenVisible>
                        </div>

                        <div className="space-y-8">
                            <FadeInWhenVisible>
                                <section className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">SKILLS</h2>
                                    <ul className="list-disc list-inside text-gray-300">
                                        <li>Java, Python, JavaScript</li>
                                        <li>React.js, Next.js, Spring</li>
                                        <li>AWS, MongoDB, MySQL</li>
                                        <li>GitHub, DigitalOcean, CloudFlare</li>
                                    </ul>
                                </section>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible>
                                <section className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">EDUCATION</h2>
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-300">The Wheatley School</h3>
                                        <p className="text-sm text-gray-400">Sep 2021, Old Westbury</p>
                                    </div>
                                </section>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible>
                                <section className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">LANGUAGES</h2>
                                    <ul className="text-gray-300">
                                        <li>Chinese: Native speaker</li>
                                        <li>English: Native speaker</li>
                                    </ul>
                                </section>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible>
                                <section className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">COURSES</h2>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>
                                            <h3 className="text-lg font-medium">BWSIX Python</h3>
                                            <p className="text-sm text-gray-400">MIT, Feb 2023 — Mar 2023</p>
                                        </li>
                                        <li>
                                            <h3 className="text-lg font-medium">BWSIX Autonomous Air Vehicle</h3>
                                            <p className="text-sm text-gray-400">MIT, Feb 2023 — Mar 2023</p>
                                        </li>
                                        <li>
                                            <h3 className="text-lg font-medium">BWSIX VCS</h3>
                                            <p className="text-sm text-gray-400">MIT, Feb 2023 — Mar 2023</p>
                                        </li>
                                    </ul>
                                </section>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible>
                                <section className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-400">LINKS</h2>
                                    <a href="https://kouyang.dev/" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 block">Personal Website</a>
                                    <a href="https://www.instagram.com/kouyang.dev/" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 block">Instagram</a>
                                </section>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <PDFDownloadButton projects={projects} />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default CV;