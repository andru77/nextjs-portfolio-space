import React from 'react';
import Link from "next/link";
import {Github, Home, Linkedin, NotebookPen, Palette, Phone, User} from "lucide-react";
import ResponsiveComponent from "@components/ResponsiveComponent";
import {clsx} from "clsx";
import {motion} from "framer-motion";

const iconsObject = {
    'home': <Home strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'about': <User strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'projects': <Palette strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'contact': <Phone strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'github': <Github strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'linkedin': <Linkedin strokeWidth={1.5}  className={'w-full h-auto'}/>,
    'resume': <NotebookPen strokeWidth={1.5}  className={'w-full h-auto'}/>
}

const item = {
    hidden: {scale: 0},
    show: {scale: 1}
}

const NavLink = motion(Link)

const NavButton = ({
    x,
    y,
    label,
    link,
    icon,
    newTab,
    labelDirection = 'right'
}) => {
    return (
        <ResponsiveComponent>
            {
                ({size}) => {
                    return size && size > 480 ? (
                        <div className={'absolute cursor-pointer z-50'}
                             style={{
                                 transform: `translate(${x}, ${y})`,
                             }}
                        >
                            <NavLink className=' cursor-pointer
                                              text-foreground rounded-full flex items-center justify-center
                                              custom-bg'
                                  href={link}
                                  variants={item}
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

                            </NavLink>
                        </div>
                    )  : <>
                        <div className={'w-fit cursor-pointer z-50'}>
                            <NavLink className=' cursor-pointer
                                              text-foreground rounded-full flex items-center justify-center
                                              custom-bg'
                                  variants={item}
                                  href={link}
                                  aria-label={label}
                                  target={newTab ? '_blank' : '_self'}
                                  name={label}
                            >
                                <span
                                    className={'relative h-10 w-10 xs:h-14 xs:w-14 p-2.5 xs:p-4 group-hover:text-accent '}>
                                    {
                                        iconsObject[icon]
                                    }
                                    <span className={'peer bg-transparent absolute top-0 left-0 w-full h-full'}/>
                                    <span
                                        className={clsx('absolute hidden peer-hover:block px-2 py-1 left-full top-1/2 -translate-y-1/2 ' +
                                            'bg-background text-foreground text-sm rounded shadow-lg whitespace-nowrap', labelDirection === 'left' ? 'right-full left-auto': '')}>
                                        {label}
                                   </span>
                                </span>
                            </NavLink>
                        </div>
                    </>
                }
            }
        </ResponsiveComponent>

    );
};

export default NavButton;
