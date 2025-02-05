
import Image from "next/image";
import spaceBackground from "@public/background/space-background-without-planets.png";
import ModelRenderer from "@components/ModelRenderer";
import {SpaceExploration} from "@components/models/SpaceExploration";
import AboutDetails from "@components/about";
export default function Projects() {
    return (
        <>
            <Image src={spaceBackground}
                   alt={'space background image'}
                   className=" fixed w-full top-0 left-0 h-full object-cover object-center opacity-15 -z-10"
            />
            <div className={'w-full h-screen absolute top-1/4 -translate-y-1/2 left-0'}>
                <ModelRenderer>
                    {/* <Model /> */}
                    <SpaceExploration />
                </ModelRenderer>
            </div>
            <div className={'relative w-full h-[250px] flex flex-col items-center justify-center mt-64'}>
                {/*<div className={'absolute flex flex-col items-center text-center top-[70%] left-[40%] -translate-y-1/2'}>*/}
                    <h1 className={'font-bold text-6xl text-accent'}>Jose Andres Colmenares</h1>
                    <p className={'font-semibold text-2xl '}>Meet the astronaut behind this portfolio</p>
                {/*</div>*/}
            </div>
            <AboutDetails />
        </>
    );
}
