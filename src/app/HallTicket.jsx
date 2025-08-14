import DownloadHT from '@/components/HallTicket/DownloadHT'
import HallTicketPDF from '@/components/HallTicket/HTpdf'

import React, { useState } from 'react'

function HallTicket() {
  const [student, setStudent]=useState(null)
  return (
    <div>
        {/* <PageHeader title='Download Hall Ticket' subtitle='Fill The Form Below To Download Hall Ticket.'/> */}
        <div className='w-full h-20 md:h-40'>
        </div>
        <DownloadHT setStudent={setStudent}/>
        {student&&<HallTicketPDF setStudent={setStudent} studentData={student || {}}/>}
    </div>
  )
}

export default HallTicket
