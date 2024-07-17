// app/projects/page.js

import React from 'react';
import ProjectsPage from "@/components/ProjectsPage";

export const metadata = {
    title: 'Project Showcase | Kaicheng',
    description: 'Explore my diverse portfolio of web development, AI/ML, robotics, and other innovative projects.',
};
export default function Projects() {
    return <ProjectsPage />;
}