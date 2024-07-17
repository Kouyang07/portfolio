// app/projects/ProjectsPage.jsx

'use client'

import React from 'react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
    loading: () => <CardSkeleton />,
    ssr: false
});
const CurrentProjectCard = dynamic(() => import('@/components/CurrentProjects'), {
    loading: () => <CardSkeleton />,
    ssr: false
});

const currentProjects = [
    {
        name: "Personal Portfolio Website",
        type: "Web Development",
        tech: ["Next.js", "React", "Tailwind CSS"],
        description: "Building and refining my personal portfolio website to showcase my projects and skills.",
        github: "https://github.com/Kouyang07/portfolio"
    },
    {
        name: "BSAFMV ML/Statistics Research",
        type: "AI/ML",
        tech: ["Python", "TensorFlow", "OpenCV"],
        description: "Researching a method to statistically analyze the skill level of a badminton player from monocular video.",
        github: "https://github.com/Kouyang07/BSAFMVy"
    },
    {
        name: "Burble E-Commerce (Frontend)",
        type: "Frontend",
        tech: ["Next.js", "React", "Tailwind CSS", "Stripe", "Toastify"],
        description: "Building the frontend for my clothing brand, burble.world."
    },
    {
        name: "Burble E-Commerce (Backend)",
        type: "Backend",
        tech: ["Java", "Spring", "MongoDB", "REST API"],
        description: "Building the backend for my clothing brand, burble.world."
    }
];

const projects = [
    {
        name: "CSFlipper",
        image: "/projects/CSFlipper.png",
        type: "Discord Bot",
        tech: ["Java", "JDA"],
        date: "2024-06-13",
        description: "A discord bot that helps monitor CS:GO Market",
        link: null,
        github: "https://github.com/Kouyang07/CSFlipper"
    },
    {
        name: "Monolith Plugin",
        image: "/projects/Monolith.png",
        type: "Minecraft Plugin",
        tech: ["Java", "PaperMC"],
        date: "2024-04-25",
        description: "A fun plugin built with PaperMC that added custom items/mechanics to the game.",
        link: null,
        github: "https://github.com/Kouyang07/Monolith"
    },
    {
        name: "FRC Robotics Crescendo",
        image: null,
        type: "Robotics",
        tech: ["Java", "WPILib", "Advantage-Kit"],
        date: "2024-5-31",
        description: "FRC Robotics Team 2872's code for 2022-2023 season, Crescendo",
        link: null,
        github: "https://github.com/WheatleyCybercats/Crescendo/tree/AdvantageKit-Rebase"
    },
    {
        name: "Cyberbot (Discord Bot)",
        image: "/projects/Cyberbot.png",
        type: "Discord Bot",
        tech: ["Java", "JDA", "Cloudflare R3"],
        date: "2024-03-16",
        description: "Discord bot that helps with FRC Robotics Team 2872",
        link: null,
        github: "https://github.com/WheatleyCybercats/Cyberbot"
    },
    {
        name: "Jarvis Recreation",
        image: null,
        type: "Backend",
        tech: ["Python", "OpenAI API", "PicoVoice API"],
        date: "2024-01-15",
        description: "Creating Jarvis from MCU",
        link: null,
        github: "https://github.com/Kouyang07/Jarvis"
    },
    {
        name: "FRC Robotics Charged Up",
        image: "/projects/FRC-2023.jpeg",
        type: "Robotics",
        tech: ["Java", "WPILib"],
        date: "2023-10-17",
        description: "FRC Robotics Team 2872's code for 2022-2023 season, Charged Up",
        link: null,
        github: "https://github.com/WheatleyCybercats/ChargedUp"
    },
    {
        name: "SBFinder",
        image: null,
        type: "Backend",
        tech: ["Java", "Slothpixel API", "Maven"],
        date: "2022-8-30",
        description: "A java program used to search for a Hypixel Skyblock item based on given UID",
        link: null,
        github: "https://github.com/Kouyang07/SBFinder"
    },
    {
        name: "Java Math Utilities",
        image: "/projects/Java-Math-Utilities.png",
        type: "Library",
        tech: ["Java"],
        date: "2022-6-14",
        description: "A set of java utilities that are created to help you solve the most daunting task in high school math courses.",
        link: null,
        github: "https://github.com/Kouyang07/Java-Math-Utilities"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    }
};

function CardSkeleton() {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg animate-pulse">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
            <div className="h-20 bg-gray-700 rounded mb-4"></div>
            <div className="flex justify-between">
                <div className="h-8 bg-gray-700 rounded w-1/3"></div>
                <div className="h-8 bg-gray-700 rounded w-8"></div>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <>
            <NextSeo
                title="Project Showcase | Kaicheng"
                description="Explore my diverse portfolio of web development, AI/ML, robotics, and other innovative projects."
                canonical="https://yourwebsite.com/projects"
                openGraph={{
                    url: 'https://yourwebsite.com/projects',
                    title: 'Project Showcase | Kaicheng',
                    description: 'Explore my diverse portfolio of web development, AI/ML, robotics, and other innovative projects.',
                    images: [
                        {
                            url: 'https://example.com/og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Project Showcase',
                        },
                    ],
                    site_name: 'Kaicheng Portfolio',
                }}
                twitter={{
                    handle: '@yourtwitter',
                    site: '@yourwebsite',
                    cardType: 'summary_large_image',
                }}
            />
            <main className="container mx-auto px-4 py-12 min-h-screen">
                <motion.header
                    className="text-center mb-12 mt-24"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient animate-text" style={{
                        lineHeight: '1.2',
                        paddingBottom: '0.1em',
                        marginBottom: '0.1em',
                        display: 'inline-block',
                        verticalAlign: 'bottom'
                    }}>
                        Project Showcase
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Some of the projects I've worked on in the past and currently working on.
                    </p>
                </motion.header>

                <motion.section
                    className="mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-3xl font-semibold mb-6 text-white">Currently Working On</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {currentProjects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Suspense fallback={<CardSkeleton />}>
                                    <CurrentProjectCard project={project} />
                                </Suspense>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-3xl font-semibold mb-6 text-white">Completed Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Suspense fallback={<CardSkeleton />}>
                                    <ProjectCard project={project} />
                                </Suspense>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </main>
        </>
    );
}