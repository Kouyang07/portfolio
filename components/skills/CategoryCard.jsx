'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillItem from './SkillItem';
import { containerVariants, categoryVariants } from './animationVariants';

const CategoryCard = ({ category }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={categoryVariants}
            className="glassmorphism p-6 shadow-lg"
        >
            <h3 className="text-2xl font-semibold mb-6 text-teal-400">{category.name}</h3>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="space-y-4"
            >
                {category.skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default CategoryCard;