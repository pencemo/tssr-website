import PageHeader from '@/components/Utils/PageHeader'
import { Location01Icon } from 'hugeicons-react'
import React from 'react'

const state = [
    "Tamil Nadu", "Karnataka", "Maharashtra", "Goa", "Uttar Pradesh", "Bihar", "New Delhi", "Hyderabad"
]
function StateFr() {
  return (
    <div className='w-full '>
        <PageHeader title='State Franchise' subtitle='Get Franchise for starting a course at low investment to provide quality education.' />
        <div className='max-w-[85rem] py-20 mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {state.map((item, index) =>{
                return (
                    <div data-aos="fade-up" className='flex flex-col border min-h-40 hover:shadow-lg transition-all group border-gray-200 rounded-lg p-4 items-center justify-center gap-2' key={index}>
                        <Location01Icon strokeWidth={2} className='text-emerald-600' size={30}/>
                        <h1 className='text-2xl font-bold group-hover:text-theme-500'>{item}</h1>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default StateFr