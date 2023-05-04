import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something legendary together</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#5651e5]'>Samuel</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    간단한 설명
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <div className='flex itmes-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='https://www.linkedin.com/in/chanyoo/'>
                            <FaLinkedinIn/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                       <Link href='https://github.com/scy02718'>
                            <FaGithub/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsPersonLinesFill/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main