import React from 'react'
import { Button } from '../ui/button'

function AboutTscc() {
  return (
    <div className='w-full min-h-[800px] py-20 flex items-center justify-center bg-white'>
   {/* Features */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Grid */}
  <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div>
      <img data-aos="fade-up" className="rounded-xl" src="https://img.freepik.com/premium-photo/professional-young-repairman-worker-uniform-cap-with-modern-toolbox-with-equipment-after-repair-refrigerator-kitchen_283617-2787.jpg?w=826" alt="Features Image" />
    </div>
    {/* End Col */}

    <div className="mt-5 sm:mt-10 lg:mt-0">
      <div className="space-y-6 sm:space-y-8">
        {/* Title */}
        <div className="space-y-2 md:space-y-4">
          <h2 data-aos="fade-up" className="font-bold text-3xl lg:text-4xl text-gray-800">
          TECHNICAL SKILL CERTIFICATION COUNCIL - TSCC
          </h2>
          <p data-aos="fade-up" className="text-gray-500">
          Based on the recommendations of Technical Study and Skill Research (TSSR) Council, an Autonomous Body & a National Development Authority which promotes TSCC, TSSR Skill Certification Council. We are not depend on any government body, any government bondation with our programmes. TSSR COUNCIL-TSCC is a govt. authorized self-governing organisation.TSCC-TSSR Skill Certification Council is a division of TSSR COUNCIL registered under State Government. The Council has been established in January 2019 with an aim to empower youth to take part in the economic and all round growth of India.
          </p>
        </div>
        {/* End Title */}

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

export default AboutTscc