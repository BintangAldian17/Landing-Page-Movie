import React from 'react'
import { BiCameraMovie } from 'react-icons/bi'


export const Navbar = () => {
    return (
        <div className=' fixed w-full h-16 bg-transparant z-[1000000]'>
            <div className=' flex  items-center h-full px-12 justify-between'>
                <div className='flex items-center gap-x-2 cursor-pointer'>
                    <BiCameraMovie className=' h-8 w-8 text-secondary' />
                    <span className=' text-secondary font-bold text-2xl'>FABIRA</span>
                </div>
                <div className=' flex items-center gap-x-28 h-full text-center'>
                    <ul className=' flex gap-x-12 h-full items-center'>
                        <li className=' hover:border-b-2 cursor-pointer border-secondary'>HOME</li>
                        <li className=' hover:border-b-2 cursor-pointer border-secondary'>MOVIE</li>
                        <li className=' hover:border-b-2 cursor-pointer border-secondary'>TV SERIES</li>
                        <li className=' hover:border-b-2 cursor-pointer border-secondary'>SEARCH</li>
                    </ul>
                    <div>
                        <button className=' h-9 w-24 rounded-lg font-semibold uppercase bg-secondary hover:bg-opacity-90'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
