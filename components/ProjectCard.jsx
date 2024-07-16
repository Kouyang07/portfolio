// components/ProjectCard.js

'use client'

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

export default function ProjectCard({ project }) {
    const CardWrapper = ({ children }) => {
        if (project.link) {
            return (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-xl"
                >
                    {children}
                </a>
            );
        }
        return <div className="h-full">{children}</div>;
    };

    return (
        <CardWrapper>
            <article className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col h-full rounded-xl shadow-lg border border-white/10">
                <div className="relative w-full pt-[56.25%] mb-6 overflow-hidden rounded-lg">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white/30">
                            <FaCode size={48} />
                        </div>
                    )}
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">{project.name}</h2>
                <ul className="mb-6 flex-grow space-y-2 text-sm text-white/70">
                    <li><span className="font-medium text-white/90">Type:</span> {project.type}</li>
                    <li><span className="font-medium text-white/90">Tech:</span> {project.tech.join(', ')}</li>
                    <li><span className="font-medium text-white/90">Date:</span> {project.date}</li>
                    <li className="mt-3 text-white/80">{project.description}</li>
                </ul>
                <div className="flex justify-between items-center mt-auto">
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors duration-300 flex items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaExternalLinkAlt className="mr-2" size={14} />
                            View Project
                        </a>
                    ) : (
                        <span className="text-white/60 italic">Project in stealth mode 🕵️‍♂️</span>
                    )}
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaGithub size={24} />
                        </a>
                    ) : (
                        <span className="text-white/60 italic text-sm">Code is shy 🙈</span>
                    )}
                </div>
            </article>
        </CardWrapper>
    );
}
