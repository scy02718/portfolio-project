import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import animalfaceImage from '../public/assets/projects/animal.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'

const animal = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' fill style={{objectFit:"cover"}} src={animalfaceImage} alt='/'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-30%] text-white p-2 z-10'>
                <h2 className='py-2'>Animal Classification</h2>
                <h3>Pytorch Lightning / Python</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h2>Overview</h2>
                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                <Link href='/#projects'>
                    <button className='px-8 py-2 mt-4'>Return</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold uppercase pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Pytorch Lightning</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Python</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default animal