import React from 'react'
import { Hero } from './Hero'
import { Navbar } from './Navbar'
import { Content } from './Content'
import { Footer } from './Footer'

export const Container = () => {
    return (
        <main className=' h-full w-full bg-gradient-to-b from-black to-primary text-white'>
            <Navbar />
            <Hero />
            <Content />
            <Footer />
        </main>
    )
}
