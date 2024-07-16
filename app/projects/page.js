// app/projects/page.js
import ProjectCard from '../../components/ProjectCard';

export const metadata = {
    title: 'Project Showcase | Kaicheng',
    description: 'Explore my portfolio of all sort of projects',
};

const projects = [
    {
        name: "CSFlipper",
        image: "/projects/CSFLipper.png",
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

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-12 min-h-screen">
            <header className="text-center mb-12 mt-24">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient animate-text">
                    Innovating Across Platforms
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                    From Web and Mobile Apps to Cutting-Edge Research Projects
                </p>

            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </main>
    );
}
