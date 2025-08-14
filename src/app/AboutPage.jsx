import AboutCenter from '@/components/About/AboutCenter'
import AboutInfo from '@/components/About/AboutInfo'
import AboutUsSection from '@/components/About/AboutUsSection'
import Logos from '@/components/Home/Logos'
import PageHeader from '@/components/Utils/PageHeader'
import React from 'react'

export default function AboutPage() {
  return (
    <div>
        <PageHeader title='About Us' subtitle='Get Franchise for starting a course at low investment to provide quality education.' />
        <AboutUsSection/>
        <AboutCenter/>
        <Logos/>
        <AboutInfo/>
    </div>
  )
}
