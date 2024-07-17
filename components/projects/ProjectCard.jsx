// components/ProjectCard.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col h-full">
            <div className="mb-4 relative h-48 flex-shrink-0">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-gray-500 text-lg">No Image Available</span>
                    </div>
                )}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{project.type}</p>
            <p className="mb-4 flex-grow overflow-y-auto">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
            {project.github && (
                <Link href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors mt-auto">
                    View on GitHub
                </Link>
            )}
        </div>
    );
}
