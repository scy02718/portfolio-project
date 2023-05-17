import React from "react";
import Image from "next/image";
import Link from "next/link";
import quickDrawImage from "../public/assets/projects/quick.png";
import aboutusImage from "../public/assets/projects/quick_draw/about_us.png";
import badgeImage from "../public/assets/projects/quick_draw/badge.png";
import hiddenImage from "../public/assets/projects/quick_draw/hidden_word.png";
import sandboxImage from "../public/assets/projects/quick_draw/sandbox.png";
import settingsImage from "../public/assets/projects/quick_draw/settings.png";
import statsImage from "../public/assets/projects/quick_draw/statistics.png";
import zenImage from "../public/assets/projects/quick_draw/zen.png";

import { RiRadioButtonFill } from "react-icons/ri";

const quick_draw = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={quickDrawImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-30%] text-white p-2 z-10">
          <h2 className="py-2">Quick Draw!</h2>
          <h3>Java / JavaFX / Git</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="my-4">
            I developed a JavaFX-based AI application (game) as part of a group
            project involving three individuals from Part II Software
            Engineering. The game&apos;s primary functionality revolves around
            selecting a random target word from a database, which the user then
            attempts to draw on a canvas. Simultaneously, an AI in the
            background tries to guess the user&apos;s drawing. If the user&apos;s drawing
            is accurate enough for the AI to confidently guess the target word,
            the user wins. Throughout the entire semester, our group
            collaborated on this project, taking charge of the design, frontend,
            and backend development of the game. I will provide a brief overview
            of some additional features we implemented, and you can download the
            detailed report at the bottom of the page.
          </p>
          <p className="my-4">Different Modes:</p>
          <ul className="list-disc ml-4">
            <li>
              Normal Mode: In this mode, the user aims to draw the target
              category as accurately and quickly as possible until the AI
              guesses it correctly.
            </li>
            <li>
              Hidden-Word Mode: In this mode, the user doesn&apos;t explicitly know
              the target category but receives a description of it. The user
              then draws according to the description until the AI makes the
              correct guess. (Image on the left/top)
            </li>
            <li>
              In Zen Mode, the user focuses on drawing the target category
              without any time limit or winning criteria. Color palette is
              provided. (Image in the middle)
            </li>
            <li>
              SandBox Mode (Novel): This mode allows the user complete
              independence without any restrictions. It specifically caters to
              the core target user of the product, art students, enabling them
              to practice their drawing skills effectively and freely. (Image on
              the right/bottom)
            </li>
          </ul>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={hiddenImage}
                  alt="/"
                  width="770"
                  height="770"
                />
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={zenImage}
                  alt="/"
                  width="770"
                  height="770"
                />
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={sandboxImage}
                  alt="/"
                  width="770"
                  height="770"
                />
              </div>
            </div>
          </div>
          <p className="my-4">Other features:</p>
          <ul className="list-disc ml-4">
            <li>
              Add and Delete user - The application allows users to be added and
              deleted. Each user profile stores data such as the number of wins,
              losses, win rate, fastest time to victory, earned badges, and
              more.
            </li>
            <li>
              Badges - The product has been made more enjoyable by making user
              target achievements, badges. (image on the top left / first)
            </li>
            <li>
              Statistics - The user can see its own statistics, increasing the
              interest towards the games. (image on the top right / second)
            </li>
            <li>
              Difficulty Settings - The user can customise the difficulty level
              of the game. (image on the bottom, in bottom left / third)
            </li>
            <li>
              Sound effects and music - The sound effects and music was added
              for additional entertainment
            </li>
            <li>
              About Us Page (Novel) - The about us page promotes the core
              business value of Speedy Skechers to the user with explicitly
              written explanations. (image on the bottom right / last)
            </li>
          </ul>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={badgeImage}
                  alt="/"
                  width="770"
                  height="770"
                />
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={statsImage}
                  alt="/"
                  width="770"
                  height="770"
                />
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={settingsImage}
                  alt="/"
                  width="770"
                  height="770"
                />
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={aboutusImage}
                  alt="/"
                  width="770"
                  height="770"
                />
              </div>
            </div>
          </div>
          <p className="my-4">
            Overall, this project was entertaining. Being involved in a group
            project made us actively communicate and practice many pratical
            features such as version controlling and conflict resolvement. The
            development process also made us practice professional
            communication, and design knowledge as well. By thorough
            communication, it was possible to finish the assignment on time, and
            eventually got good grades in this course.
          </p>
          <p className="my-4">
            You can download the full report of this project created by our team
            below. Unfortunately, due to privacy concerns of the school, the
            code cannot be shared.
          </p>
          <a
            className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white"
            href="assets/projects/quick_draw/report.zip"
            download
          >
            Download
          </a>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4">Return</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 max-h-[280px]">
          <div className="p-2">
            <p className="text-center font-bold uppercase pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaFX
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Git
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Collaboration
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default quick_draw;
