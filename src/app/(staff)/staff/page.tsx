import React from 'react'
import StaffTable from '../../component/table/StaffTable'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const page = () => {
  return (
    <section className='pt-10 px-5'>
        <div className='flex items-center justify-between'>
          <h2 className='heading2'>Staff</h2>
          <Link href='/staff_form'><Button>Add Staff</Button></Link>
        </div>
        <div>
        
          <StaffTable/>
        </div>
    </section>
  )
}

export default page