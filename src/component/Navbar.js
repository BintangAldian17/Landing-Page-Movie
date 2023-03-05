import { useState, useEffect } from 'react'
import { BiCameraMovie } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    return (
        <div className=' fixed w-full h-16 bg-transparant z-[1000000] text-white'>
            <div className=' flex  items-center h-full px-12 justify-between'>
                <div className='flex items-center gap-x-2 cursor-pointer'>
                    <BiCameraMovie className=' h-8 w-8 text-red-700' />
                    <span className=' text-red-700 font-bold text-2xl'>FABIRA</span>
                </div>
                <div className=' flex items-center gap-x-28 h-full text-center'>
                    <ul className=' flex gap-x-12 h-full items-center'>
                        <Link to='/' >
                            <li className=' hover:border-b-2 cursor-pointer border-red-700'>HOME</li>
                        </Link>
                        <Link to='/movie' >
                            <li className=' hover:border-b-2 cursor-pointer border-red-700'>MOVIE</li>
                        </Link>

                        <Link to='/tv'>
                            <li className=' hover:border-b-2 cursor-pointer border-red-700'>TV SERIES</li>
                        </Link>
                        <li className=' hover:border-b-2 cursor-pointer border-red-700'>SEARCH</li>
                    </ul>
                    <div>
                        <button className=' h-9 w-24 rounded-lg font-semibold uppercase bg-red-700 hover:bg-opacity-90'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
