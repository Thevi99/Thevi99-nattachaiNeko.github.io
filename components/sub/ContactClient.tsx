// ContactClient.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../sub/contact-client.css';

const ContactClient = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleTwitterClick = () => {
    window.open("https://twitter.com", "_blank");
  };

  const handleDiscordClick = () => {
    window.open("https://discord.com", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com", "_blank");
  };

  return (
    <div className="flex-grow md:mt-20 mb-10">
        <div className='md:mt-10 relative text-center rounded-lg mx-auto md:w-3/4 md:p-0 p-5 scroll-fade-in'>
            <div className='max-w-4xl mx-auto flex flex-col gap-8' data-aos="fade-up">
                <div data-aos="fade-up" className='aos-init aos-animate'>
                    <h1 className='text-white tracking-tight text-4xl lg:text-4xl mb-4'>Contact</h1>
                    <p className='text-white text-lg lg:text-xl font-normal text-default-500'>
                        Thank you for visiting my portfolio. If you are interested in discussing internship opportunities or have any inquiries regarding my work, please feel free to reach out. I am eagerly anticipating the opportunity to collaborate and learn with your esteemed team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button className="contact-item contact-button "  data-aos="fade-up" onClick={handleTwitterClick}>
                        {/* Twitter SVG or Icon */}
                        <span className="contact-icon">🐦</span>
                        <div className="contact-info">
                            <h2 className="contact-title">Twitter</h2>
                            <p className="contact-text">ormation.</p>
                        </div>
                    </button>

                    {/* Discord */}
                    <button className="contact-item contact-button flex flex-col relative overflow-hidden text-foreground box-border outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 shadow-medium rounded-lg cursor-pointer transition-transform-background motion-reduce:transition-none pressed:scale-97 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-1.8 aos-init aos-animate" type="button" role="button" data-aos="fade-up" >
                        <div className='flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-lg gap-2 pb-0'>
                            <div className='flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.5 90.9 225.8 210 247v-175h-63v-72h63v-56.2c0-62.3 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.2c-30.7 0-40.5 19.1-40.5 38.7V256h68.7l-11 72h-57.7v175c119.1-21.2 210-123.5 210-247z"></path>
                                </svg>
                            </div>

                            <div className="justify-between items-center inline-flex space-between w-full">
                                <p className="text-base"> Facebook</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-right-from-square" className="svg-inline--fa fa-arrow-up-right-from-square text-base text-gray-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className='mt-1 relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0' >
                            <p className="font-normal text-base text-gray-300">
                                Can come and check out additional project details on GitHub.
                            </p>
                        </div>
                    </button>


                    {/* GitHub */}
                    <button className="contact-item contact-button flex flex-col relative overflow-hidden text-foreground box-border outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 shadow-medium rounded-lg cursor-pointer transition-transform-background motion-reduce:transition-none pressed:scale-97 tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-1.8 aos-init aos-animate" type="button" role="button" data-aos="fade-up" >
                        <div className='flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-lg gap-2 pb-0'>
                            <div className='flex justify-center p-2 rounded-full items-center text-pink-500 bg-transparent'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                    </path>
                                </svg>
                            </div>

                            <div className="justify-between items-center inline-flex space-between w-full">
                                <p className="text-base"> GitHub</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-right-from-square" className="svg-inline--fa fa-arrow-up-right-from-square text-base text-gray-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className='mt-1 relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0' >
                            <p className="font-normal text-base text-gray-300">
                                Can come and check out additional project details on GitHub.
                            </p>
                        </div>
                    </button>

                </div>

            
            </div>  
        </div>
    </div>
  );
};

export default ContactClient;
