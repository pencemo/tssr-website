import { Certificate01Icon, Rocket01Icon, VisionIcon } from "hugeicons-react";
import React from "react";
import img from '../../assets/Images/about.png'

export default function About() {
  return (
    <div className="w-full h-full min-h- screen relative">
      <div className="absolute left-0 bottom-0 z-0 bg-theme-500 w-full h-full clip max-md:hidden"></div>
      <div className="mx-auto max-w-[85rem] relative z-10 px-4 grid md:grid-cols-2  gap-6 ">
        <div data-aos="fade-up" className="w-full h-full min-h-80 relative order-2 md:order-1">
          <img src={img} className="absolute bottom-0 " alt="" />
        </div>
        <div className="w-full h-full order-1 md:order-2 py-20">
          <div>
            <div className="grid gap-12">
              <div>
                <h1 data-aos-delay="50" data-aos="fade-up" className="text-lg">About TSSR</h1>
                <h2 data-aos-delay="100" data-aos="fade-up" className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                  Educate, Innovate, Elevate.
                </h2>
                <p data-aos-delay="200" data-aos="fade-up" className="mt-3 text-gray-800 dark:text-neutral-400">
                  Technical Study and Skill Research (TSSR) Council is Providing
                  Franchise to institutions which conduct short term courses and
                  skilled training courses in Technical and other disciplines.
                  We have franchise to more than 1400+ courses and the students
                  who complete the trainining in the institute which have our
                  franchise will receive iso and other authorities recognized
                  certificates.
                </p>
              </div>

              <div className="space-y-6 lg:space-y-10">
                <div data-aos="fade-up" className="flex gap-x-5 sm:gap-x-8 bg-yellow-100/50 p-3 rounded-xl">
                <IconComp className='bg-red-100' Icon={Rocket01Icon}/>
                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Our Mission
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      TSSR Council is to cultivate and disseminate knowledge in
                      science, education, technology, and related fields to
                      enhance the well-being of society and the global
                      community.
                    </p>
                  </div>
                </div>

                <div data-aos="fade-up" className="flex gap-x-5 sm:gap-x-8 bg-yellow-100/50 p-3 rounded-xl">
                <IconComp className='bg-blue-100' Icon={VisionIcon}/>
                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Our Vision
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      TSSR Council aspires to lead transformative educational
                      initiatives that promote economic, social, and
                      environmental progress, fostering a diverse and
                      interconnected world.
                    </p>
                  </div>
                </div>

                <div data-aos="fade-up" className="flex gap-x-5 sm:gap-x-8 bg-yellow-100/50 p-3 rounded-xl">
                  <IconComp className='bg-green-100' Icon={Certificate01Icon}/>
                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Certificate
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      Distinctively provide acces mutfuncto users whereas
                      communicate leveraged services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function IconComp({Icon , className='bg-green-100'}) {
  return (
    <div className={`shrink-0 mt-2 size-16 grid place-content-center rounded-full text-gray-800  ${className}`}>
        <Icon size={30}/>
    </div>
  )
}

