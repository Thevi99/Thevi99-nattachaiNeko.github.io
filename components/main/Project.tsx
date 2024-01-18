import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/User.png"
          title="An e-commerce Website for products and services."
          description="This is a project that involves both Front-end and Back-end development, with a customer base of approximately 30,000+ people. My responsibilities include using MongoDB to support the customer database, creating APIs for e-commerce, and designing the web page interfaces. References: https://seriality.ai/"
        />
        <ProjectCard
          src="/BotDis.png"
          title="Discord bot for buying and connecting to MongoDB."
          description="I have created this bot to perform various functions related to trading, such as buying (via True Wallet API), rehwid, randomkey, genkey, etc., all through Discord. The primary database used for this is MongoDB. References: https://github.com/Thevi99/Bot_DC"
        />
        <ProjectCard
          src="/crack.png"
          title="Webhook for preventing hacking or cracking attempts."
          description="It will be a webhook system that I'm creating to detect cheating or cracking attempts for both the game and scripts, using Lua code as part of the prevention mechanism."
        />
      </div>
    </div>
  );
};

export default Projects;