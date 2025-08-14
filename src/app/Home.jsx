import React from 'react'
import NavMenu from '@/components/Utils/NavMenu'
import bgImg from '../assets/Images/01.jpg'
import Hero from '@/components/Home/Hero'
import Service from '@/components/Home/Service'
import Course from '@/components/Home/Course'
import About from '@/components/Home/About'
import AboutTscc from '@/components/Home/AboutTscc'
import GallerySection from '@/components/Home/GallerySection'
import AchieveSection from '@/components/Home/AchieveSection'
import Footer from '@/components/Utils/Footer'
import Logos from '@/components/Home/Logos'

function Home() {
  return (
    <>
    
    <div style={{backgroundImage: `url(${bgImg})`}} className='w-full h-screen overflow-hidden bg-no-repeat md:bg-center bg-cover'>
    <Hero/>
    </div>
    <Logos/>
    <Service/>
    <Course/>
    <About/>
    <AboutTscc/>
    <GallerySection/>
    <AchieveSection/>
    {/* <Footer/> */}
    </>
  )
}

export default Home