import React from 'react'
import { Hero } from './Hero'
import { Content } from './Content'
import { Footer } from './Footer'

import { getGenresMovie } from "../hooks/useMovieData"
import { useQuery } from 'react-query'

export const HomePage = () => {
    const { data: genresMovie, } = useQuery(['genres-movies'], getGenresMovie,
        {
            refetchOnWindowFocus: false,
            staleTime: 180 * 60 * 1000, // 3 hours

        }
    )


    return (
        <main className=' h-full w-full bg-black text-white'>
            <Hero />
            <Content />
            <Footer />
        </main>
    )
}
