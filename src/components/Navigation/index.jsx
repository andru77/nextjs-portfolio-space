"use client"
import React, {useEffect} from 'react';
import {BtnList} from "@/app/data";
import NavButton from "@components/Navigation/NavButton";


const Navigation = () => {

    const angleIncrement = 360 / BtnList.length;

    return (
        <div className='w-full fixed h-screen flex items-center justify-center '>
            <div className='w-max flex items-center justify-between relative hover:pause animate-spin-slow group'>
                {
                    BtnList.map((btn, index) => {
                        const angleRad = (index * angleIncrement * Math.PI) / 180;
                        const radius = `calc(20vw - 1rem)`;
                        const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                        const y = `calc(${radius} * ${Math.sin(angleRad)})`;
                        return <NavButton key={index}
                                          x={x}
                                          y={y}
                                          link={btn.link}
                                          label={btn.label}
                                          icon={btn.icon}
                                          newTab={btn.newTab}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default Navigation;
