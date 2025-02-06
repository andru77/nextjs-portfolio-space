"use client"
import {clsx} from "clsx";
import React from "react";
import {motion} from "framer-motion";

const ItemLayout= ({children, className}) => {
    return <motion.div
            initial={{scale: 0}}
            whileInView={{scale:1}}
            transition={{duration: 0.5}}
            viewport={{once:true}}
           className={clsx('custom-bg rounded-xl flex items-center flex-col justify-center p-6 space-y-6', className)}>
        {
            children
        }
    </motion.div>
}

export default ItemLayout;