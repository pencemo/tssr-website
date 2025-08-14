import React from 'react'
import { TiStar, TiStarHalf, TiStarHalfOutline } from 'react-icons/ti'
import img1 from '../../assets/Images/5.jpeg'
import img2 from '../../assets/Images/2.jpeg'
import img4 from '../../assets/Images/agri.png'
import img3 from '../../assets/Images/skill.jpg'
import { Button } from '../ui/button'
import pdf from '../../assets/pdf/TSSR COURSES.pdf'

const courseList = [
    {
      imgUrl: img1,
      title: 'Teachers Training Course',
      description: 'Learn modern teaching methodologies, classroom management, and curriculum planning to become a certified educator.',
    },
    {
      imgUrl: img2,
      title: 'Human Resources Development',
      description: 'Develop essential HR skills including recruitment, employee management, training, and labor law fundamentals.',
    },
    {
      imgUrl: img4,
      title: 'Indian Chiropractic Course',
      description: 'Understand spinal alignment, posture correction, and holistic chiropractic practices rooted in Indian tradition.',
    },
    {
      imgUrl: img3,
      title: 'Technical & Skill Courses',
      description: 'Gain hands-on experience in various technical trades and vocational skills for industry-ready employment.',
    },
    {
      imgUrl: 'https://img.freepik.com/free-photo/person-conducting-reiki-therapy_23-2149403921.jpg',
      title: 'Ayurveda & Siddha Course',
      description: 'Explore natural healing techniques based on ancient Ayurveda and Siddha systems for wellness and therapy.',
    },
    {
      imgUrl: 'https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg',
      title: 'Computer Courses',
      description: 'Master essential computer skills from basics to advanced software, networking, and IT tools.',
    },
  ];
  
export default function Course() {
  return (
    <div><div className='w-full min-h-screen py-20 flex items-center justify-center bg-[#fff9f1]'>
    <div className='mx-auto max-w-[85rem] px-4 '>
        <div data-aos="fade-up" className='text-center space-y-1'>
            <h1 className='text-lg'>Featured Courses</h1>
            <h1 className='text-3xl md:text-4xl font-bold'>Pick A Course To Get Started</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-14'>
            {courseList.map((item, i)=>{
                return (
                    <div data-aos="fade-up" className='w-full p-3 shadow-lg bg-white border group rounded-xl   overflow-hidden'>
                        <div className='w-full h-60 overflow-hidden rounded-lg'>

                        <img src={item.imgUrl} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300' alt="" />
                        </div>
                        <div className='py-6 px-2'>
                            <div className='flex mt-2 items-center text-theme-500'>
                                <TiStar size={20} /><TiStar size={20} /><TiStar size={20} /><TiStar size={20} /> <TiStarHalf size={20}/>
                            </div>
                            <h1 className='text-2xl font-bold group-hover:text-blue-900 transition-all'>{item.title}</h1>
                            <p className='text-sm mt-2 text-neutral-600'>{item.description}</p>
                            <Button size='sm' className='text-sm font-medium hover:underline mt-2 bg-theme-500 hover:bg-theme-600'>Readmore</Button>
                        </div>
                       
                    </div>
                )
            })}
        </div>
        <div className='mt-12 flex justify-center'>
          <a href={pdf} target='_blank'>

            <Button data-aos="fade-up" className='bg-theme-500 hover:bg-theme-600'>Browse All Categories</Button>
          </a>
        </div>
    </div>
</div></div>
  )
}
