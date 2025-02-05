"use client";
import React, {useEffect, useState} from 'react';
import {clsx} from "clsx";

const CELLS = 6;

const Cells = () => {
    const [stackOfActivation, setStackOfActivation] = useState([]);
    const [deactivationStarted, setDeactivationStarted] = useState(false);

    useEffect(() => {
        if (deactivationStarted) {
            let intervalId;
            const deactiveCells = () => {
                // delete the last element of the stack
                setStackOfActivation(stackOfActivation.slice(0, -1));
                if (stackOfActivation.length === 1) {
                    clearInterval(intervalId);
                }
            };

            intervalId = setInterval(deactiveCells, 1110);

            return () => clearInterval(intervalId);
        }
    }, [stackOfActivation, deactivationStarted]);


    const activeCell = (i) => {
        if (stackOfActivation.includes(i)) {
            console.log('already active')
            return;
        }
        const newStack = [...stackOfActivation].flat();
        newStack.push(i);
        setStackOfActivation(prev =>
            [
                ...newStack
            ]
        );

        setDeactivationStarted(newStack.length === CELLS);

    }

    return (
        <div className={'grid grid-cols-12 gap-1 w-3/4'}>

            {
                new Array(CELLS).fill(0).map((_, i) => {
                    return (
                        <div key={i}
                             className={clsx('col-span-2 w-full h-20 rounded-lg', stackOfActivation?.includes(i) ? 'bg-accent' : 'bg-white')}
                             onClick={() => {activeCell(i)}}
                        >

                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cells;
