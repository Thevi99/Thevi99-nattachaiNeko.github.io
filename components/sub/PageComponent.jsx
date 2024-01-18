import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const PageComponent = () => {
  const mySkillsRef = useRef(null); 

  return (
    <>
      <HeroContent scrollToMySkills={() => mySkillsRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <MySkills ref={mySkillsRef} /> 
    </>
  );
};
PageComponent.displayName = 'PageComponent';

export const HeroContent = ({ scrollToMySkills }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 my-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={scrollToMySkills}
        >
          Learn More!!
        </motion.div>
      </div>
    </motion.div>
  );
};
HeroContent.displayName = 'HeroContent';

// MySkills Component
const MySkills = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='flex flex-col items-center justify-start min-h-screen w-full'>
        
    </div>
  );
});
MySkills.displayName = 'MySkills';

export default PageComponent;
