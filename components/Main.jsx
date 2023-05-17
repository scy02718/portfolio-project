import React from "react";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build something legendary together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m
            <Link href="/#about">
              <span className="text-[#5651e5] cursor-pointer"> Chan</span>
            </Link>
          </h1>
          <h2 className="py-2 text-gray-700">Studying Software Engineering</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            As a penultimate software engineering student at the esteemed
            University of Auckland, I am deeply passionate about developing
            innovative solutions that address real-world problems. Throughout my
            academic journey, I have worked on a wide range of projects that
            have provided me with invaluable experience in software engineering.
            From creating image classifier to designing user-friendly
            interfaces, I have gained a diverse skill set that allows me to
            approach challenges from multiple angles. My passion for software
            engineering extends beyond the classroom, and I am constantly
            seeking new opportunities to expand my knowledge and skills. Whether
            it&apos;s attending industry conferences or collaborating with peers on
            open-source projects, I am committed to staying at the forefront of
            this ever-evolving field, and excited to see how I would be able to
            contribute to the wave of change.
          </p>
          <div className="flex itmes-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/chanyoo/">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://github.com/scy02718">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://www.facebook.com/profile.php?id=100012656147526">
                <AiFillFacebook />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://www.instagram.com/samuel.yoo_/">
                <AiOutlineInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
