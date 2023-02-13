import React from 'react'
import Home1 from '../img/home1.jpg'
import Home2 from '../img/home2.jpg'
import Home3 from '../img/home3.jpg'
import { FaPlay } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'


export const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <img src={Home1} alt='home' className=' w-full h-full absolute inset-0 object-cover' />

            <div className=' w-full h-full bg-gradient-to-r from-black to-transparent absolute z-50'>
                <div className=' h-full w-[70vh] items-center flex ml-32'>
                    <div className=' flex flex-col gap-y-6'>
                        <div className=' flex items-center gap-x-4'>
                            <div className=' flex items-center gap-x-2'>
                                <AiFillStar className=' text-yellow-300 w-5 h-5' />
                                <span className=' text-xl font-semibold'>8.5</span>

                            </div>
                            <div className=' flex gap-x-2'>
                                <span>Action </span>
                                |
                                <span>Advanture</span>
                            </div>

                        </div>
                        <div>
                            <h1 className=' text-5xl text-white font-bold '>
                                Venom
                            </h1>
                            <p className=' text-white text-sm mt-4'>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            </p>
                        </div>
                        <div className=' flex gap-x-8 mt-10'>
                            <button className=' bg-red-600 w-36 h-11 uppercase font-medium rounded-full flex items-center justify-center gap-x-2'>
                                <FaPlay className='  text-white w-3 h-3' />
                                <span> Watch</span></button>
                            <button className=' bg-thirddark w-36 h-11 uppercase font-medium rounded-full flex items-center justify-center gap-x-2'>
                                <BsFillBookmarkFill className=' w-3 h-5' />
                                <span>
                                    add list
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
