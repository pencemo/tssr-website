import React from 'react'
import img1 from "../../assets/icons/05.png"
import img2 from "../../assets/icons/02.png"
import img3 from "../../assets/icons/06.png"

const featureList = [
    {
         imgUrl: img1,
         title: 'Normal Discussion',
         titleSpan: 'Room',
         btnText: 'TSSR Council conduct a normal discussion with the institution management about their course requirements.',
     },
 
     {
         imgUrl: img2,
         title: 'Find Great Solution',
         titleSpan: 'Courses',
         btnText: 'TSSR Council provide the best solution by opting best courses according the criteria management proposed.',
     },
  
    
     {
         imgUrl: img3,
         title: 'Grow Education',
         titleSpan: 'Leader',
         btnText: 'Get Franchise from TSSR Council to give quality education to students who joins the institution and thus increase the status of institution.',
     },
 ]
function FranchiseIconSec() {
  return (
    <div>
        {/* Icon Blocks */}
<div className="max-w-[85rem] py-20 px-4 min-h-96 flex flex-col gap-10 items-center justify-center sm:px-6 lg:px-8 lg:py-14 mx-auto">
<div className='text-center space-y-1'>
            <h1 data-aos="fade-up" className='text-lg'>process</h1>
            <h1 data-aos="fade-up" className='text-3xl md:text-4xl font-bold'>How It Works</h1>
        </div>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
    {/* Card */}
    {featureList.map((item, index) =>{
        return (
    <div data-aos="fade-up" className="group border flex flex-col  gap-y-6 size-full hover:bg-gray-100 focus:outline-hidden rounded-lg p-5" >
      <div className="shrink-0 text-gray-800 mt-0.5 me-6" >
        <img className='w-auto h-12' src={item.imgUrl} alt="" />
      </div>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800">{item.title} <span className="text-gray-500">{item.titleSpan}</span></h3>
          <p className="text-gray-600 mt-2">{item.btnText}</p>
        </div>

        <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
          {/* Learn more */}
          <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </div>
        )
    })}
    {/* End Card */}

    
  </div>
</div>
{/* End Icon Blocks */}
    </div>
  )
}

export default FranchiseIconSec