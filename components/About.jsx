import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            My name is Chan Yoo, although I go by Samuel. I am currently a
            penultimate (third-year) Software Engineering student at the
            University of Auckland. My passion for software engineering
            encompasses a broad range of interests, from algorithms and web
            development to AI and deep learning. Adaptability, resilience, and
            intellectual curiosity are among my greatest strengths. I thrive on
            tackling new problems, researching emerging concepts, and delving
            into the latest academic theses until I fully comprehend them. This
            has enabled me to learn and adapt at an extremely fast pace, an
            essential requirement for any software engineer working in an
            ever-changing field.
          </p>
          <p className="py-2 text-gray-600">
            I am currently maintaining a high GPA of 8.8 out of 9.0, which I
            believe shows not just my commitment to learning, but reflects also
            my resilience, inherent passion and flexibility. I have also gained
            hands-on communication, leadership and cooperation skills by
            completing such courses as &quot;Professional Skills and Communication&quot;
            and &quot;Software Engineering Design&quot;
          </p>
          <p className="py-2 text-gray-600">
            I am originally from South Korea, fluent in both Korean and English.
            I also enjoy working out, playing piano and guitar, watching movies
            and just hanging out with my friends!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
            alt="/"
            width="600"
            height="600"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
