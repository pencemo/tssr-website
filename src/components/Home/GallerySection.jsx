import React from 'react'
import img1 from '../../assets/Images/5.jpeg'
import img2 from '../../assets/Images/8.jpeg'
import img4 from '../../assets/Images/3.jpeg'
import { Button } from '../ui/button'

const imgs = [
    img1,img2, img4
  ];
  
export default function GallerySection() {
  return (
    <div><div className='w-full py-20 flex items-center justify-center bg-[#fff9f1]'>
    <div className='mx-auto max-w-[85rem] px-4 '>
        <div className='text-center space-y-1'>
            <h1 data-aos="fade-up" className='text-lg'>FROM OUR GALLERY</h1>
            <h1 data-aos="fade-up" className='text-3xl md:text-4xl font-bold'>Check Out Latest Pictures</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-14'>
            {imgs.map((item, i)=>{
                return (
                    <div key={i} data-aos="fade-up" className='w-full p-3 shadow-lg bg-white border group rounded-xl   overflow-hidden'>
                        <div className='w-full h-60 overflow-hidden rounded-lg'>

                        <img src={item} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300' alt="" />
                        </div>
                       
                    </div>
                )
            })}
        </div>
        <div className='mt-12 flex justify-center'>
            <Button data-aos="fade-up" className='bg-theme-500 hover:bg-theme-600'>Visit Gallery</Button>
        </div>
    </div>
</div></div>
  )
}
