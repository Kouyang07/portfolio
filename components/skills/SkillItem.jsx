'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { skillVariants } from './animationVariants';

const SkillItem = ({ skill }) => {
    return (
        <motion.div
            variants={skillVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer"
        >
            <div className="flex items-center p-2 rounded-lg transition-colors duration-300 bg-gray-800 group-hover:bg-gray-700">
                <motion.div
                    className="w-8 h-8 mr-4 rounded-full flex items-center justify-center text-lg bg-opacity-80 transition-all duration-300"
                    style={{ backgroundColor: skill.color }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    {React.createElement(skill.icon, {
                        color: '#ffffff',
                        'aria-hidden': 'true',
                        size: "1em"
                    })}
                </motion.div>
                <h4 className="text-lg font-medium text-white group-hover:text-teal-300 transition-colors duration-300">
                    {skill.name}
                </h4>
            </div>
        </motion.div>
    );
};

export default SkillItem;