import React from 'react'
import Image from 'next/image'
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src='/../public/assets/florian-olivo-4hbJ-eymZ1o-unsplash.jpg' alt='/' width='600' height='600'/>
                        </div>
                        <div>
                            <h2 className='py-2'>Samuel Yoo</h2>
                            <p>Developer</p>
                            <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect with me</p>
                            <div className='flex itmes-center justify-between m-auto py-4'>
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
                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300'/>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300'/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input type="email" className='border-2 rounded-lg p-3 flex border-gray-300'/>
                            </div>
                            <div className='flex flex-col py-2' >
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg border-gray-300' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact