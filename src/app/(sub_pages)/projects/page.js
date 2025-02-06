
import Image from "next/image";

import spaceBackground from "@public/background/space-background-without-planets.png";
import ProjectList from "@components/projects";
import {projectsData} from "@/app/data";
import ModelRenderer from "@components/ModelRenderer";
import {Rocket} from "@components/models/Rocket";
export default function Projects() {
    return (
        <>
            <Image src={spaceBackground}
                   alt={'space background image'}
                   className=" fixed w-full top-0 left-0 h-full object-cover object-center opacity-25 -z-10"
            />
            <h1 className={'text-accent text-2xl md:text-4xl w-3/4'}>
                List of space trips
            </h1>
            <ProjectList projects={projectsData}/>
            <div className={"flex items items-center justify-center fixed top-2 " +
                "lg:left-0 h-screen -z-10"}>
                <ModelRenderer>
                    {/* <Model /> */}
                    <Rocket />
                </ModelRenderer>
            </div>
        </>
    );
}
