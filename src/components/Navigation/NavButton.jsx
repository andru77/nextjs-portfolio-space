import React from 'react';
import Link from "next/link";
import {Github, Home, Linkedin, NotebookPen, Palette, Phone, User} from "lucide-react";

const iconsObject = {
    'home': <Home strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'about': <User strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'projects': <Palette strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'contact': <Phone strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'github': <Github strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'linkedin': <Linkedin strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'resume': <NotebookPen strokeWidth={1.5}  className={'w-full h-auto'}/>
}

const NavButton = ({
    x,
    y,
    label,
    link,
    icon,
    newTab
}) => {
    return (
        <div className={'absolute cursor-pointer z-50'}
             style={{
                 transform: `translate(${x}, ${y})`,
             }}
        >
            <Link className='
                      cursor-pointer
                      text-foreground rounded-full flex items-center justify-center
                      bg-background/20 border border-accent/80 border-solid backdrop-blur[6px]
                      shadow-glass-inset hover:shadow-glass-sm
            '
                  href={link}
                  aria-label={label}
                  target={newTab ? '_blank' : '_self'}
                  name={label}
            >
                <span
                    className={'relative h-14 w-14 p-4 animate-spin-slow-reverse group-hover:pause group-hover:text-accent '}>
                    {
                        iconsObject[icon]
                    }
                    <span className={'peer bg-transparent absolute top-0 left-0 w-full h-full'}/>
                    <span className={'absolute hidden peer-hover:block px-2 py-1 left-full top-1/2 -translate-y-1/2 ' +
                        'bg-background text-foreground text-sm rounded shadow-lg whitespace-nowrap'}>
                    {label}
                </span>
                </span>

            </Link>
        </div>
    );
};

export default NavButton;
