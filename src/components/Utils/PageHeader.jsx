import React from 'react'
import bgImg from '../../assets/Images/01.jpg'

function PageHeader({title, subtitle}) {
  return (
    <div className='w-full h-96 md:h-[550px] bg-amber-200 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='w-full h-full flex flex-col justify-center items-center p-2'>
            <h1 data-aos-delay="50" data-aos="fade-up" className='text-4xl md:text-6xl font-bold text-center mt-20'>{title || "Page Header"}</h1>
            <p data-aos-delay="200" data-aos="fade-up" className='text-lg text-center max-w-xl text-gray-600'>{subtitle || "This is a subtitle"}</p>
        </div>
    </div>
  )
}

export default PageHeader