import React from 'react'
import { TiStar, TiStarHalf, TiStarHalfOutline } from 'react-icons/ti'
import img1 from '../../assets/Images/steps.jpeg'
import img2 from '../../assets/Images/ease.jpeg'
import img3 from '../../assets/Images/clt.jpeg'
import img4 from '../../assets/Images/womens.jpeg'
import { Button } from '../ui/button'

const blogList = [
    {
      imgUrl: img1,
      imgAlt: "blog thumb rajibraj91 rajibraj",
      title: "STEPS T.T.C ACADEMY",
      desc: " KONDOTTY",
    },
    {
      imgUrl: img2,
      imgAlt: "blog thumb rajibraj91 rajibraj",
      title: "EASE EDUCATIONAL HUB",
      desc: "EDAPPAL",
    },
    {
      imgUrl: img3,
      imgAlt: "blog thumb rajibraj91 rajibraj",
      title: "CHIROPRACTIC ACADEMY ",
      desc: "KOZHIKKODE",
    },
  
    {
      imgUrl:img4,
      imgAlt: "blog thumb rajibraj91 rajibraj",
      title: "AL WARDA WOMEN'S COLLEGE",
      desc: "VENGARA, MONNIYUR, VENNIYUR",
    },
  ];
  
export default function AboutCenter() {
  return (
    <div><div className='w-full min-h-screen py-20 flex items-center justify-center bg-[#fff9f1]'>
    <div className='mx-auto max-w-[85rem] px-4 '>
        <div className='text-center space-y-1'>
            <h1 data-aos="fade-up" className='text-lg'>Study Centres</h1>
            <h1 data-aos="fade-up" className='text-3xl md:text-4xl font-bold'>We Have Done</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-20'>
            {blogList.map((item, i)=>{
                return (
                    <div data-aos="fade-up" className='w-full p-3 shadow-lg bg-white border group rounded-xl   overflow-hidden'>
                        <div className='w-full h-60 overflow-hidden rounded-lg'>

                        <img src={item.imgUrl} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300' alt="" />
                        </div>
                        <div className='py-6 px-2'>
                            <h1 className='text-2xl font-bold group-hover:text-blue-900 transition-all'>{item.title}</h1>
                            <p className='text-sm mt-2 text-neutral-600'>{item.desc}</p>
                        </div>
                       
                    </div>
                )
            })}
        </div>
    </div>
</div></div>
  )
}
