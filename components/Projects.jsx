import React from "react";
import Link from "next/link";
import Image from "next/image";
import idolFaceImage from "../public/assets/projects/idol.png";
import quickDrawImage from "../public/assets/projects/quick.png";
import animalfaceImage from "../public/assets/projects/animal.jpg";
import ProjectItem from "../components/ProjectItem.jsx";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Idol Face Project"
            backgroundImg={idolFaceImage}
            projectUrl="/idol"
            skills="ReactJS, Flask, Pytorch"
          />
          <ProjectItem
            title="Quick Draw!"
            backgroundImg={quickDrawImage}
            projectUrl="/quick_draw"
            skills="Java, JavaFX, Git"
          />
          <ProjectItem
            title="Animal Classification"
            backgroundImg={animalfaceImage}
            projectUrl="/animal"
            skills="Pytorch Lightning, Python"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
