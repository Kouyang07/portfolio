import { useState, useEffect } from 'react';
import Image from 'next/image';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import {containerVariants} from "@/components/home/animationVariants";

const projects = [
    {
        id: 1,
        title: 'Burble E-Commerce',
        description: 'A full-stack E-Commerce web application using Next.js for frontend and Java Spring Boot for backend.',
        image: '/projects/burble-ecommerce.png',
        url: 'https://www.burble.world/'
    },
    {
        id: 2,
        title: 'FRC Charged Up',
        description: 'An innovative code-base for the FRC Robotics Competition that uses computer vision and machine learning.',
        image: '/projects/frc-2024.png',
        url: 'https://youtu.be/AiGD1cAGAKA'
    },
    {
        id: 3,
        title: 'Portfolio website',
        description: 'This exact website you are viewing right now, built with Next.js and Tailwind CSS.',
        image: '/projects/portfolio.png',
        url: 'https://kouyang.dev/'
    }
];

const ProjectShowcase = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <section className="pt-0 pb-24 px-4 relative overflow-hidden bg-black mt-32">
            {/* Animated background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 z-0"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 20,
                    ease: 'linear',
                }}
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto relative z-20">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    <motion.div
                        className="mb-20 text-center"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
                            Discover our latest innovations in AI, mobile apps, and blockchain technology.
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10">
                        {/* Project Selector */}
                        <motion.div className="w-full lg:w-1/3">
                            <div
                                className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg p-4 h-full flex flex-col justify-center items-center">
                                <div className="w-full space-y-3">
                                    {projects.map((project) => (
                                        <button
                                            key={project.id}
                                            onClick={() => setSelectedProject(project)}
                                            className={`w-full text-center py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center ${
                                                selectedProject.id === project.id
                                                    ? 'bg-blue-600 bg-opacity-50 text-white shadow-lg'
                                                    : 'hover:bg-blue-500 hover:bg-opacity-20 text-cyan-300'
                                            }`}
                                        >
                                            <span>{project.title}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Project Card */}
                        <motion.div className="w-full lg:w-2/3">
                            <div
                                className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg p-6 h-full flex flex-col">
                                <div className="flex-grow flex flex-col">
                                    <div className="w-full h-48 sm:h-64 overflow-hidden rounded-lg mb-4">
                                        <Image
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-2xl font-semibold mb-2 text-white text-center">{selectedProject.title}</h2>
                                            <p className="text-cyan-300 text-lg mb-4 text-center">{selectedProject.description}</p>
                                        </div>
                                        <a
                                            href={selectedProject.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg text-center"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* View All Projects Button */}
                    <motion.div className="text-center mt-10">
                        <a
                            href="/projects"
                            className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 py-2 px-6 rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-lg"
                        >
                            View All Projects
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectShowcase;