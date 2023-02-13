import React from 'react'
import { MdMovieCreation } from 'react-icons/md'
import { MdLocalMovies } from 'react-icons/md'
import { FaFireAlt } from 'react-icons/fa'
import { ImFire } from 'react-icons/im'
import Coming1 from '../img/coming1.jpg'
import Coming2 from '../img/coming2.jpg'
import Coming3 from '../img/coming3.jpg'
import Coming4 from '../img/coming4.jpg'
import Coming5 from '../img/coming5.jpg'
import Coming6 from '../img/coming6.jpeg'
import Coming7 from '../img/coming7.jpg'
import Coming8 from '../img/coming8.jpg'
import Coming9 from '../img/coming9.jpg'
import Coming10 from '../img/coming10.jpg'
import m1 from '../img/m1.jpg'
import m2 from '../img/m2.jpg'
import m3 from '../img/m3.jpg'
import m4 from '../img/m4.jpg'
import m5 from '../img/m5.jpg'
import m6 from '../img/m6.jpg'
import m7 from '../img/m7.jpg'
import m8 from '../img/m8.png'
import m9 from '../img/m9.jpg'
import m10 from '../img/m10.jpg'


export const Content = () => {
    return (
        <div className=' mt-16 mx-24'>
            <div>
                <div className=' flex items-center gap-x-5 border-b border-secondarydark pb-6'>
                    <MdMovieCreation className=' w-8 h-8 text-secondary' />
                    <span className=' text-2xl font-bold'> POPULAR MOVIE</span>
                </div>
                <div className=' flex mt-7 gap-x-5'>
                    <div>
                        <img src={Coming1} alt='coming1' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={Coming2} alt='coming2' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={Coming3} alt='coming3' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={Coming4} alt='coming4' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={Coming5} alt='coming5' className=' rounded-md h-[368px]' />
                    </div>
                </div>
                <div className=' flex items-center gap-x-5 border-b border-secondarydark pb-6 mt-20'>
                    <MdLocalMovies className=' w-8 h-10 text-secondary' />
                    <span className=' text-2xl font-bold'> POPULAR SERIES</span>
                </div>
                <div className=' flex mt-7 gap-x-5'>
                    <div>
                        <img src={Coming6} alt='coming6' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={Coming7} alt='coming7' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={Coming8} alt='coming8' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={Coming9} alt='coming9' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={Coming10} alt='coming10' className=' rounded-md h-[368px]' />
                    </div>
                </div>
                <div className=' flex items-center gap-x-5 border-b border-secondarydark pb-6 mt-20'>
                    <FaFireAlt className=' w-8 h-10 text-secondary' />
                    <span className=' text-2xl font-bold'> TOP RATED MOVIE</span>
                </div>
                <div className=' flex mt-7 gap-x-5'>
                    <div>
                        <img src={m1} alt='m1' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={m2} alt='m2' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={m3} alt='m3' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={m4} alt='m4' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={m5} alt='m5' className=' rounded-md h-[368px]' />
                    </div>
                </div>
                <div className=' flex items-center gap-x-5 border-b border-secondarydark pb-6 mt-20'>
                    <ImFire className=' w-8 h-10 text-secondary' />
                    <span className=' text-2xl font-bold'> TOP RATED SERIES</span>
                </div>
                <div className=' flex mt-7 gap-x-5'>
                    <div>
                        <img src={m6} alt='m6' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={m7} alt='m7' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={m8} alt='m8' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={m9} alt='m9' className=' rounded-md h-[368px]' />
                    </div>
                    <div>
                        <img src={m10} alt='m10' className=' rounded-md h-[368px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
