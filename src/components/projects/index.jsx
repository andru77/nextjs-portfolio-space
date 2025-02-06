"use client";
import React from 'react';
import ProjectLayout from "@components/projects/ProjectLayout";
import { motion } from "framer-motion";

const ProjectList = ({projects}) => {
    return (
       <div className="w-full max-w-aut xl:max-w-4xl px-4 md:px-8 lg:px-16 space-y-8 flex flex-col items-center mt-10">
           {projects.map((project, index) => {
               return <ProjectLayout key={index} {...project} />;
           })}
       </div>
    );
};

export default ProjectList;
