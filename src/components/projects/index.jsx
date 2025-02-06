"use client";
import React from 'react';
import ProjectLayout from "@components/projects/ProjectLayout";
import { motion } from "framer-motion";

const container = {
    hidden: {opacity:0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.3,
        }
    }
}


const ProjectList = ({projects}) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-aut xl:max-w-full px-4 md:px-8 lg:px-16 space-y-8 flex flex-col items-center mt-10">
           {projects.map((project, index) => {
               return <ProjectLayout key={index} {...project} />;
           })}
        </motion.div>
    );
};

export default ProjectList;
