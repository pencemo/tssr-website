import FrDiscription from '@/components/Franchise/FrDiscription'
import FranchiseIconSec from '@/components/Franchise/FranchiseIconSec'
import PageHeader from '@/components/Utils/PageHeader'
import React from 'react'

function Franchise() {
  return (
    <div> 
        <PageHeader title='Authorised Training center' subtitle='Get Franchise for starting a course at low investment to provide quality education.' />
        <FranchiseIconSec/>
        <FrDiscription/>
    </div>
  )
}

export default Franchise