import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { containerVariants } from "@/components/home/animationVariants";

const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'An interactive portfolio built with Next.js, Framer Motion, and Tailwind CSS to showcase projects.',
        image: '/projects/portfolio.png',
        url: 'https://kouyang.dev/'
    },
    {
        id: 2,
        title: 'Badminton Player Localization',
        description: 'A computer vision system that extracts real-world player coordinates from video footage using Python and OpenCV.',
        image: '/projects/bplfmv.png',
        url: 'https://github.com/Kouyang07/BSAFMV'
    },
    {
        id: 3,
        title: 'Burble E-Commerce',
        description: 'A full-stack e-commerce website using Next.js for frontend and Java Spring Boot for backend.',
        image: '/projects/burble-ecommerce.png',
        url: 'https://www.burble.world/'
    },
    {
        id: 4,
        title: 'FRC Robotics Codebase',
        description: 'An innovative FRC robotics codebase integrating computer vision, autonomous control, and real-time logging.',
        image: '/projects/robotics.png',
        url: 'https://github.com/WheatleyRobotics/'
    }
];

const ProjectShowcase = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <section className="pt-20 pb-24 px-6 lg:px-12 relative overflow-hidden bg-black mt-32">
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 20, ease: 'linear' }}
            />

            <div className="max-w-7xl mx-auto relative z-20">
                <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
                    <div className="mb-16 text-center">
                        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-cyan-300 max-w-3xl mx-auto leading-relaxed">
                            A collection of my most impactful projects across AI, robotics, and software development.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group relative bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                            >
                                {/* Project Image */}
                                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* View Project Button (Hidden by Default, Visible on Hover) */}
                                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-gray-200 opacity-0 group-hover:opacity-100"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                                    <p className="text-cyan-300 text-md mt-2">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Projects Button */}
                    <div className="text-center mt-14">
                        <a
                            href="/projects"
                            className="inline-block border-2 border-cyan-400 text-cyan-400 py-3 px-8 rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-lg text-lg font-semibold"
                        >
                            View All Projects
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectShowcase;