import PageHeader from '@/components/Utils/PageHeader'
import React from 'react'

function Accreditation() {
  return (
    <div>
        <PageHeader title='Accreditations & Registration' subtitle="Our Accreditations" />
        <div className='max-w-[85rem] h-96 mx-auto px-4 py-20 '>
            <AccreditationSlide/>
            
        </div>
        <div className='max-w-[85rem] h-full mx-auto px-4 py-20 '>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 flex-wrap mt-8'>
            {logos.map(((item, i) =>{
              return (
                <div className='w-full max-w-sm' key={i}>
                  <img src={item} alt="" />
                </div>
              )
            }))}

            </div>
        </div>
    </div>
  )
}

export default Accreditation


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import { logos } from '@/components/Home/Logos';
const clientList = [
    {
      desc: "Registered under Government of Kerala, department of registration as a non profit making educational trust.",
    },
    {
      desc: "Registered under Government of India as a Non Profit Non Government Organization (NGO).",
    },
    {
      desc: "Registered under Government of India as MSME in educational sector. (Council registred under MSME Department).",
    },
    {
      desc: "Registered under the Indian Intellectual Property Rights office under Indian Trademarks Act 1999.",
    },
    {
      desc: "Quality Management System is certified as per the ISO 9001: 2015 (International Organization for Standardization)by the Absolute Quality Certification Middle East FZE, Ajman.",
    },
    {
      desc: "Quality Management System is Accredited by the International Accreditation Service , Brea, California, United States of America - A member of Asia Pacific Accreditation Cooperation.",
    },
    {
      desc: "International Accreditation Forum accredited QMS Certification.",
    },
    {
      desc: "Learning Management System is certified as per International Organization for Standardization standards  ISO 29990:2010 from Opastaja Quality Control USA with UBAS accreditation.",
    },
    {
      desc: "Certified by the ISO 21001:2018 for Management System for Educational Organizations (EOMS) from Opastaja Quality Control USA with UBAS accreditation.",
    },
    {
      desc: "Registered under the Department of Income Tax, Central Board of Direct Taxes.",
    },
    {
      desc: "Registered under the Goods and Service tax of Government of India.",
    },
    {
      desc: "Registered under the C V C, Government of India.",
    },
    {
      desc: "Certificate is registered under the Indian Intellectual Property Rights office under the Indian Copyright act 1957.",
    },
    {
      desc: "Practically proven and certified managmenet system for the assessment of students, assessors and institutions.",
    },
    {
      desc: "Professionally designed and council approved syllubus and assessment system.",
    },
  ];

function AccreditationSlide() {
  return (
    <>
      <Swiper slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={"true"}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
         className="w-full h-full py-10">
            {clientList.map((Item, index) =>{
                return <SwiperSlide key={index} className='w-full h-full hover:shadow-lg transition-all duration-200 p-4 rounded-xl border '>
                    <h1 className='text-3xl font-medium'>{index+1}</h1>
                    <p className='mt-5 text-gray-800'>{Item.desc}</p>
                </SwiperSlide>
            })}
        
       
      </Swiper>
    </>
  );
}
