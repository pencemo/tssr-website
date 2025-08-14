import { Call02Icon, GlobalIcon, Location01Icon, Mail01Icon } from 'hugeicons-react';
import React from 'react'
const contactList = [
    {
      icon: Location01Icon,
      title: "Office Address",
      desc: "TSSR Council, TSSR Bhavan, Thamarassery, Calicut, Kerala - 673573",
    },
    {
      icon: Call02Icon,
      title: "Phone number",
      desc: "+91 9400867461",
    },
    {
      icon: Mail01Icon,
      title: "Send email",
      desc: "tssrcouncil@gmail.com",
    },
    {
      icon: GlobalIcon,
      title: "Our website",
      desc: "www.tssrcouncil.com",
    },
  ];
function AboutInfo() {
  return (
    <div className='w-full min-h-[800px] py-20 flex items-center justify-center bg-white'>
   {/* Features */}
<div className="max-w-[85rem] w-full px-4 mx-auto">
<div className='text-center space-y-1'>
            <h1 data-aos="fade-up" className='text-lg'>About Us</h1>
            <h1 data-aos="fade-up" className='text-3xl md:text-4xl font-bold'>We're Always Eager To Hear From You!</h1>
        </div>
  {/* Grid */}
  <div className="md:grid w-full mt-14  md:grid-cols-2 md:items-center gap-12 xl:gap-24">
    <div data-aos="fade-up">
    <iframe className='w-full h-96 border rounded-2xl shadow-lg' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d896.5614771322248!2d75.93244312502357!3d11.419985681284997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba669f1c7cc9d39%3A0x15bdfbce4accad5d!2sTSSR%20COUNCIL!5e0!3m2!1sen!2sin!4v1753432618417!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      {/* <img className="rounded-xl" src="https://img.freepik.com/premium-photo/professional-young-repairman-worker-uniform-cap-with-modern-toolbox-with-equipment-after-repair-refrigerator-kitchen_283617-2787.jpg?w=826" alt="Features Image" /> */}
    </div>
    {/* End Col */}

    <div className="">
      <div className="space-y-6 sm:space-y-6">
        {contactList.map((item, index) =>{
            return (
                <div data-aos="fade-up" key={index} className="flex gap-x-5 sm:gap-x-8 border hover:shadow-lg py-2 px-4 rounded-2xl">
                     <div className={`shrink-0 mt-2  text-gray-800  `}>
                        <item.icon size={25}  />
                    </div>
                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      {item.title}
                    </h3>
                    <p className=" max-w-sm text-gray-600 dark:text-neutral-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
            )
        })}
        
      </div>
    </div>
    {/* End Col */}
  </div>
  {/* End Grid */}
</div>
{/* End Features */}
</div>
  )
}

export default AboutInfo