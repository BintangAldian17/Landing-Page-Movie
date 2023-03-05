import React from 'react'
import Home1 from '../img/home1.jpg'
import Home2 from '../img/home2.jpg'
import Home3 from '../img/home3.jpg'
import { FaPlay } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { CircularProgressbar } from 'react-circular-progressbar'
import { useQuery } from 'react-query'
import { getGenresMovie, getPopularMovies } from '../hooks/useMovieData'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, History } from "swiper";
import { useGetGenresName } from '../utils/useGetGenreName'
import { Link } from 'react-router-dom'
import { LoadingPage } from './pages/LoadingPage'


export const Hero = () => {
    const { isLoading, isFetching, data: dataHomeBanner, error, isError } = useQuery(['home-banner'], getPopularMovies, {
        refetchOnWindowFocus: false
    })
    const { data: AllgenresName, } = useQuery(['genres-movies'], getGenresMovie,
        {
            refetchOnWindowFocus: false,
            staleTime: 180 * 60 * 1000, // 3 hours

        }
    )

    if (isLoading || isFetching) {
        return <LoadingPage />
    }

    console.log({ dataHomeBanner });

    return (
        <div className=' w-full h-screen relative'>
            <Swiper
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, History]}
                className=" w-full h-screen absolute">
                {
                    dataHomeBanner?.data.results.map((banner, i) => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const genresMovie = useGetGenresName(AllgenresName?.data.genres, banner.genre_ids) ?? []

                        return (
                            <SwiperSlide className=" w-full h-screen " key={i}>
                                <div className=" w-full h-screen absolute z-50 bg-gradient-to-t via-transparent from-black to-transparent"></div>
                                <div className=" w-full h-screen absolute z-50 bg-gradient-to-r from-black to-transparent pl-52">
                                    <div className=" h-full  max-w-[600px] flex flex-col justify-center gap-y-10">
                                        <h1 className=" text-[65px] leading-[80px] font-bold text-white drop-shadow-lg">
                                            {banner.title}
                                        </h1>
                                        <div className=" text-white flex items-center gap-x-4">
                                            {genresMovie.map((el) => {
                                                return (
                                                    <span className=" h-9 flex justify-center items-center px-4 rounded-full bg-red-600">
                                                        {el.name}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        <p className=" text-white drop-shadow-md">{banner.overview}</p>
                                        <Link to={`/movie/${banner.id}`}>
                                            <button className=" w-40 h-[45px] bg-red-600 shadow-xl rounded-lg flex justify-center items-center gap-x-3">
                                                <FaPlay />
                                                <span>Watch Now</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
                                    alt={banner.title}
                                    className=" h-auto w-full"
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
