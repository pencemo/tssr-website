import { Clock01Icon, DiplomaIcon, HoldLocked01Icon, Mortarboard01Icon, Notification01Icon } from 'hugeicons-react';
import React from 'react'
const achievementList = [
    {
      count: "07",
      desc: "Years of Education Experience",
      sign: "+",
      color: "bg-[#8b74ff]",
      iconName: Clock01Icon,
    },
    {
      count: "92",
      desc: "Assessment Projects", 
      sign: "%",
      color: "bg-[#0f317c]",
      iconName: Notification01Icon,
    },
    {
      count: "50",
      desc: "Testing Centres",
      sign: "k",
      color: "bg-[#ea4c89]",
      iconName: Mortarboard01Icon,
    },
    {
      count: "83",
      desc: "Certified Members",
      sign: "%",
      color: "bg-violet-500",
      iconName: DiplomaIcon,
    },
  ];
function AchieveSection() {
  return (
    <div className='w-full py-20'>
        <div className='max-w-[85rem] mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='text-center space-y-1 col-span-full mb-10'>
            <h1 data-aos="fade-up" className='text-lg'>START TO SUCCESS</h1>
            <h1 data-aos="fade-up" className='text-3xl md:text-4xl font-bold'>Achieve Your Goals With TSSR</h1>
        </div>
            {achievementList.map((item, index) =>{
                return (
                    <div key={index}  className='w-full flex flex-col gap-3  group items-center justify-center relative'>
                        <div data-aos="fade-up" className={`absolute size-24 rounded-full scale-90 ${item.color} group-hover:animate-ping opacity-20 top-0 z-0`}></div>
                        <div data-aos="fade-up" className={`size-24 rounded-full   text-white grid place-content-center relative ${item.color}`}>
                            <item.iconName className='group-hover:rotate-12 transition-all duration-300' size={40}/>
                        </div>
                        <h1 data-aos="fade-up" className='text-3xl md:text-4xl font-bold'>{item.count}{item.sign}</h1>
                        <p data-aos="fade-up" className='text-muted-foreground text-center'>{item.desc}</p>
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default AchieveSection