'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CategoryCard from './CategoryCard';
import { skillCategories } from './skillCategories';
import { containerVariants, categoryVariants } from './animationVariants';

const Skills = () => {
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
        <section className="py-24 px-4 relative overflow-hidden bg-black">
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
                        variants={categoryVariants}
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
                            Technical Proficiencies
                        </h2>
                        <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
                            I have experience with a wide range of technologies and tools. Here are some of the key
                            skills that I have acquired over the years.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {skillCategories.map((category) => (
                            <CategoryCard key={category.name} category={category} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;