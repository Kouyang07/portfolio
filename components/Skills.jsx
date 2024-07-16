'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaPython, FaJs, FaReact, FaGithub, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiSpring, SiMysql, SiMongodb, SiDigitalocean, SiCloudflare } from 'react-icons/si';

const skillCategories = [
    {
        name: 'Languages',
        skills: [
            { name: 'Java', color: '#007396', icon: FaJava, url: 'https://www.java.com/en/' },
            { name: 'Python', color: '#3776AB', icon: FaPython, url: 'https://www.python.org/' },
            { name: 'JavaScript', color: '#F7DF1E', icon: FaJs, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        ],
    },
    {
        name: 'Frameworks',
        skills: [
            { name: 'Next.js', color: '#000000', icon: SiNextdotjs, url: 'https://nextjs.org/' },
            { name: 'React.js', color: '#61DAFB', icon: FaReact, url: 'https://reactjs.org/' },
            { name: 'Spring', color: '#6DB33F', icon: SiSpring, url: 'https://spring.io/' },
        ],
    },
    {
        name: 'Databases & VCS',
        skills: [
            { name: 'MongoDB', color: '#47A248', icon: SiMongodb, url: 'https://www.mongodb.com/' },
            { name: 'MySQL', color: '#4479A1', icon: SiMysql, url: 'https://www.mysql.com/' },
            { name: 'GitHub', color: '#181717', icon: FaGithub, url: 'https://github.com/' },
        ],
    },
    {
        name: 'Cloud & DevOps',
        skills: [
            { name: 'AWS', color: '#232F3E', icon: FaAws, url: 'https://aws.amazon.com/' },
            { name: 'DigitalOcean', color: '#0080FF', icon: SiDigitalocean, url: 'https://www.digitalocean.com/' },
            { name: 'Cloudflare', color: '#F38020', icon: SiCloudflare, url: 'https://www.cloudflare.com/' },
        ],
    },
];

const Skills = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <section ref={ref} className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-30 z-0"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzRmZDFjNTIwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-5 z-10"></div>

            <div className="max-w-7xl mx-auto relative z-20">
                <motion.div
                    className="mb-20 text-center"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -50 }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
                        Technical Proficiencies
                    </h2>
                    <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
                        Empowering Innovation Through Cutting-Edge Expertise
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 50 }
                            }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="glassmorphism p-6 shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-teal-400">{category.name}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <a
                                            href={skill.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 transition-all duration-300 hover:bg-gray-700 hover:border-teal-400"
                                        >
                                            <div className="flex items-center">
                                                <div
                                                    className="w-10 h-10 mr-4 rounded-full flex items-center justify-center text-xl bg-opacity-80 transition-all duration-300 group-hover:scale-110"
                                                    style={{ backgroundColor: skill.color }}
                                                >
                                                    {React.createElement(skill.icon, { color: '#ffffff' })}
                                                </div>
                                                <h4 className="text-lg font-medium group-hover:text-teal-300 transition-colors duration-300">{skill.name}</h4>
                                            </div>
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;