"use client";

import React, { forwardRef } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const MySkills = forwardRef((props, ref) => {
    MySkills.displayName = 'MySkills';
    const imageStyle = {
        width: '120px',
        height: '90px',
        objectFit: 'contain' as const , // กำหนดค่าที่ถูกต้อง
        margin: '0 20px',
    };

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const [refInView, inView] = useInView({
        triggerOnce: true, // ให้เช็คเพียงครั้งเดียวเมื่ออนิเมชันแสดง
    });

    const springProps = useSpring({
        from: { translateY: -10 },
        to: { translateY: 10 },
        loop: { reverse: true },
        config: { duration: 2000 },
    });

  return (
    <div ref={refInView} className='flex flex-col items-center justify-center py-20'>
        {inView && (
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
            id="MySkills"
            >
                My Skills
            </motion.div>
        )}

        {inView && (
            <motion.div
            className="flex justify-center items-center space-x-4 my-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >
                <div className='flex justify-center items-center space-x-4 my-8'> 
                    <animated.img
                    src='html.png'
                    width="120"
                    height="90"
                    alt="HTML"
                    style={{ ...imageStyle, transform: springProps.translateY.to(ty => `translateY(${ty}px)`) }}
                    />

                    <animated.img
                    src='js.png'
                    width="120"
                    height="90"
                    alt="JS"
                    style={{ ...imageStyle, transform: springProps.translateY.to(ty => `translateY(${ty}px)`) }}
                    />

                    <animated.img
                    src='css.png'
                    width="120"
                    height="90"
                    alt="css"
                    style={{ ...imageStyle, transform: springProps.translateY.to(ty => `translateY(${ty}px)`) }}
                    />
                    
                    <animated.img
                    src='mongodb.png'
                    width="120"
                    height="90"
                    alt="mongodb"
                    style={{ ...imageStyle, transform: springProps.translateY.to(ty => `translateY(${ty}px)`) }}
                    />
                                
                    <animated.img
                    src='tailwind.png'
                    width="120"
                    height="90"
                    alt="Tailwind"
                    style={{ ...imageStyle, transform: springProps.translateY.to(ty => `translateY(${ty}px)`) }}
                    />
                                            
                    <animated.img
                    src='Mysql_logo.png'
                    width="120"
                    height="90"
                    alt="Mysql"
                    style={{ ...imageStyle, transform: springProps.translateY.to(ty => `translateY(${ty}px)`) }}
                    />

                    <animated.img
                    src='react.png'
                    width="120"
                    height="90"
                    alt="React"
                    style={{ ...imageStyle, transform: springProps.translateY.to(ty => `translateY(${ty}px)`) }}
                    />

                    <animated.img
                    src='node-js.png'
                    width="120"
                    height="90"
                    alt="Node.js"
                    style={{ ...imageStyle, transform: springProps.translateY.to(ty => `translateY(${ty}px)`) }}
                    />

                    <animated.img
                    src='next.png'
                    width="120"
                    height="90"
                    alt="next.js"
                    style={{ ...imageStyle, transform: springProps.translateY.to(ty => `translateY(${ty}px)`) }}
                    />
                </div>

            </motion.div>
        )}
        
    </div>
  )
});

export default MySkills
