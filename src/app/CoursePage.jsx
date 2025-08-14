import Course from '@/components/Home/Course'
import PageHeader from '@/components/Utils/PageHeader'
import React from 'react'

function CoursePage() {
  return (
    <div>
        <PageHeader title='Archives: Courses' subtitle='Get Franchise for starting a course at low investment to provide quality education.' />
        <Course/>
    </div>
  )
}

export default CoursePage