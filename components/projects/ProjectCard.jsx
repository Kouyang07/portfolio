// components/ProjectCard.jsx
import Link from 'next/link';
import Image from 'next/image';

// Define and export ProjectCard
export function ProjectCard({ project }) {
    return (
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
            <p className="text-sm text-gray-300 mb-2">{project.type}</p>
            <p className="mb-4 text-gray-200">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
            {project.github ? (
                <Link href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors">
                    View on GitHub
                </Link>
            ) : (
                <p className="text-gray-400 italic text-sm">
                    Oops! This project is playing hide and seek with its GitHub link. 🙈
                </p>
            )}
        </div>
    );
}

// Define and export CurrentProjectCard
export function CurrentProjectCard({ project }) {
    // Function to format the date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="bg-black rounded-lg p-6 shadow-lg h-[500px] flex flex-col">
            <div className="mb-4 relative w-full h-48 flex-shrink-0">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-lg">No Image Available</span>
                    </div>
                )}
            </div>
            <div className="flex-grow overflow-y-auto">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{project.type}</p>
                {project.date && (
                    <p className="text-sm text-gray-300 mb-2">
                        Created: {formatDate(project.date)}
                    </p>
                )}
                <p className="mb-4 text-gray-200">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="bg-blue-600 text-white text-xs px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-auto pt-4">
                {project.github ? (
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        View on GitHub
                    </Link>
                ) : (
                    <p className="text-gray-400 italic text-sm">
                        Oops! This project is playing hide and seek with its GitHub link. 🙈
                    </p>
                )}
            </div>
        </div>
    );
}

// Define and export CardSkeleton
export function CardSkeleton() {
    return (
        <div className="bg-black rounded-lg p-6 shadow-lg animate-pulse">
            <div className="h-48 bg-gray-800 rounded mb-4"></div>
            <div className="h-6 bg-gray-800 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
            <div className="h-20 bg-gray-800 rounded mb-4"></div>
            <div className="flex justify-between">
                <div className="h-8 bg-gray-800 rounded w-1/3"></div>
                <div className="h-8 bg-gray-800 rounded w-8"></div>
            </div>
        </div>
    );
}