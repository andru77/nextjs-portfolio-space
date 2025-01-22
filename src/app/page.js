import Image from "next/image";

import spaceBackground from "@public/background/space-backhground.png";
import ModelRenderer from "@components/ModelRenderer";
import {LittleAstronaut} from "@components/models/LittleAstronaut";
import Navigation from "@components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={spaceBackground}
             alt={'space background image'}
             fill
             className="w-full h-full object-cover object-center opacity-25 -z-10"
      />
       <div className="w-full h-screen">
           <Navigation />

           <ModelRenderer>
               {/* <Model /> */}
               <LittleAstronaut />
           </ModelRenderer>
       </div>
    </main>
  );                                                           
}
