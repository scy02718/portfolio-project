import React from "react";
import Image from "next/image";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import programmingImage from "../public/assets/programming.jpg"

const Contact = () => {
  const handleButtonClick = (event) =>{
    alert("Message has been sent!");
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={programmingImage}
                  alt="/"
                  width="600"
                  height="600"
                />
              </div>
              <div>
                <h2 className="py-2">Chan (Samuel) Yoo</h2>
                <p>Software Engineering Student</p>
                <p className="py-4">
                  If you have any question about me, or my projects, please
                  don&apos;t hesistate to contact me. My Linkedin and GitHub is
                  available below, and you can email me using the form.
                </p>
              </div>
              <div className="text-gray-400">
                <p className="hover:scale-105 ease-in duration-300">+64 212662948</p>
                <p className="hover:scale-105 ease-in duration-300">scy02718@gmail.com</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex itmes-center justify-between m-auto py-4">
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
                  {/*
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
  */}
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <Link href="/">
                  <button className="w-full p-4 text-gray-100 mt-4" onClick={handleButtonClick}>
                    Send Message
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
