import React from 'react';
import Link from "next/link";
import {Home} from "lucide-react";

const HomeButton = () => {
    return (
        <Link className='
                      cursor-pointer
                      text-foreground rounded-full flex items-center justify-center
                      custom-bg
                      fixed
                      top-10
                      left-6
                      w-fit
                       z-50
                      '
              href={'/'}
              name={'home'}
        >
                <span
                    className={'relative h-14 w-14 p-4 group-hover:text-accent '}>
                   <Home strokeWidth={1.5}  className={'w-full h-auto'}/>
                    <span className={'peer bg-transparent absolute top-0 left-0 w-full h-full'}/>
                    <span className={'absolute hidden peer-hover:block px-2 py-1 left-full top-1/2 -translate-y-1/2 ' +
                        'bg-background text-foreground text-sm rounded shadow-lg whitespace-nowrap'}>
                        {'home'}
                     </span>
                </span>

        </Link>
    );
};

export default HomeButton;
