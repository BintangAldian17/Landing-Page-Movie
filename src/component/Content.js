import React from 'react'
import { MdMovieCreation } from 'react-icons/md'
import { MdLocalMovies } from 'react-icons/md'
import { FaFireAlt } from 'react-icons/fa'
import { ImFire } from 'react-icons/im'
import { useQuery } from 'react-query'
import { getPopularMovies, getPopularTv } from '../hooks/useMovieData'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
import { LoadingPage } from './pages/LoadingPage'


export const Content = () => {
    const {
        isLoading: isLoadingPopularMovie,
        isFetching: isFetchingPopularMovie,
        data: dataPopularMovie,
        error: errorPopularMovie,
        isError: isErrorPopularMovie
    } = useQuery(['home-popular-movie'], getPopularMovies, {
        refetchOnWindowFocus: false
    })

    const {
        isLoading: isLoadingTopRatedMovie,
        isFetching: isFetchingTopRatedMovie,
        data: dataTopRatedMovie,
        error: errorTopRatedMovie,
        isError: isErrorTopRatedMovie
    } = useQuery(['home-toprated-movie'], () => getPopularMovies({ mediaCategory: 'top_rated' }), {
        refetchOnWindowFocus: false
    })

    const {
        isLoading: isLoadingPopularTv,
        isFetching: isFetchingPopularTv,
        data: dataPopularTv,
        error: errorPopularTv,
        isError: isErrorPopularTv
    } = useQuery(['home-popular-tv'], getPopularTv, {
        refetchOnWindowFocus: false
    })

    const {
        isLoading: isLoadingTopRatedTv,
        isFetching: isFetchingTopRatedTv,
        data: dataTopRatedTv,
        error: errorTopRatedTv,
        isError: isErrorTopRatedTv
    } = useQuery(['home-toprated-tv'], () => getPopularTv({ mediaCategory: 'top_rated' }), {
        refetchOnWindowFocus: false
    })

    if (isLoadingPopularMovie || isFetchingPopularMovie || isLoadingTopRatedMovie || isFetchingTopRatedMovie || isLoadingPopularTv || isFetchingPopularTv || isLoadingTopRatedTv || isFetchingTopRatedTv) {
        return <LoadingPage />
    }

    return (
        <div className=' mt-16 mx-20'>
            <div>
                <div className=' flex items-center gap-x-5 pb-6'>
                    <MdMovieCreation className=' w-8 h-8 text-red-700' />
                    <span className=' text-2xl font-bold'> POPULAR MOVIE</span>
                </div>
                <div>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}>
                        <div>
                            {dataPopularMovie?.data.results.map((popularMovie) => {
                                return (
                                    <SwiperSlide className="">
                                        <Link key={popularMovie.id} to={`/movie/${popularMovie.id}`}>
                                            <img
                                                src={`https://image.tmdb.org/t/p/original${popularMovie.poster_path}`}
                                                key={popularMovie.id}
                                                alt={popularMovie.title}
                                                className=""
                                            />
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                        </div>
                    </Swiper>
                </div>
                <div className=' flex items-center gap-x-5  pb-6 mt-20'>
                    <MdLocalMovies className=' w-8 h-10 text-red-700' />
                    <span className=' text-2xl font-bold'> POPULAR SERIES</span>
                </div>
                <div>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}>
                        <div>
                            {dataTopRatedMovie?.data.results.map((topRatedMovie) => {
                                return (
                                    <SwiperSlide className="">
                                        <Link key={topRatedMovie.id} to={`/movie/${topRatedMovie.id}`}>
                                            <img
                                                src={`https://image.tmdb.org/t/p/original${topRatedMovie.poster_path}`}
                                                key={topRatedMovie.id}
                                                alt={topRatedMovie.title}
                                                className=""
                                            />
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                        </div>
                    </Swiper>
                </div>
                <div className=' flex items-center gap-x-5  pb-6 mt-20'>
                    <FaFireAlt className=' w-8 h-10 text-red-700' />
                    <span className=' text-2xl font-bold'> TOP RATED MOVIE</span>
                </div>
                <div>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}>
                        <div>
                            {dataPopularTv?.data.results.map((popularTv) => {
                                return (
                                    <SwiperSlide className="">
                                        <Link key={popularTv.id} to={`/movie/${popularTv.id}`}>
                                            <img
                                                src={`https://image.tmdb.org/t/p/original${popularTv.poster_path}`}
                                                key={popularTv.id}
                                                alt={popularTv.title}
                                                className=""
                                            />
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                        </div>
                    </Swiper>
                </div>
                <div className=' flex items-center gap-x-5  pb-6 mt-20'>
                    <ImFire className=' w-8 h-10 text-red-700' />
                    <span className=' text-2xl font-bold'> TOP RATED SERIES</span>
                </div>
                <div>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}>
                        <div>
                            {dataTopRatedTv?.data.results.map((topRatedTv) => {
                                return (
                                    <SwiperSlide className="">
                                        <Link key={topRatedTv.id} to={`/movie/${topRatedTv.id}`}>
                                            <img
                                                src={`https://image.tmdb.org/t/p/original${topRatedTv.poster_path}`}
                                                key={topRatedTv.id}
                                                alt={topRatedTv.title}
                                                className=""
                                            />
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
