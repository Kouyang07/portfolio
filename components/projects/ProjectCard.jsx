// components/CurrentProjectCard.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function CurrentProjectCard({ project }) {
    // Function to format the date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="mb-4 relative w-full h-48">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-lg">No Image Available</span>
                    </div>
                )}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{project.type}</p>
            {project.date && (
                <p className="text-sm text-gray-400 mb-2">
                    Created: {formatDate(project.date)}
                </p>
            )}
            <p className="mb-4">{project.description}</p>
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
                <p className="text-white/60 italic text-sm">
                    Oops! This project is playing hide and seek with its GitHub link. 🙈
                </p>
            )}
        </div>
    );
}
