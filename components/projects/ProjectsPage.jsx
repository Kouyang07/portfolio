// app/projects/ProjectsPage.jsx

'use client'

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import CardSkeleton from '@/components/projects/CardSkeleton';
import { currentProjects, projects } from '@/data/projectsData';
import Head from "next/head";

const ProjectCard = dynamic(() => import('@/components/projects/ProjectCard'), {
    loading: () => <CardSkeleton />,
    ssr: false
});
const CurrentProjectCard = dynamic(() => import('@/components/projects/CurrentProjectCard'), {
    loading: () => <CardSkeleton />,
    ssr: false
});

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

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>Project Showcase | Kaicheng</title>
                <meta name="description" content="Explore my diverse portfolio of web development, AI/ML, robotics, and other innovative projects." />
                <link rel="canonical" href="https://yourwebsite.com/projects" />
                <meta property="og:url" content="https://yourwebsite.com/projects" />
                <meta property="og:title" content="Project Showcase | Kaicheng" />
                <meta property="og:description" content="Explore my diverse portfolio of web development, AI/ML, robotics, and other innovative projects." />
                <meta property="og:image" content="https://example.com/og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Kaicheng Portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@yourwebsite" />
                <meta name="twitter:creator" content="@yourtwitter" />
            </Head>
            <main className="container mx-auto px-4 py-12 min-h-screen">
                {/* Header section */}
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

                {/* Current Projects section */}
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

                {/* Completed Projects section */}
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
