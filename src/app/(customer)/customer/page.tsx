import React from 'react'
import CustomerTable from '../../component/table/CustomerTable'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <section className=' sections'>
      <div className='flex items-center justify-between'>
        <h2 className='heading2'>Customer</h2>
        <Link href='/customer_form'><Button>Add customer</Button></Link>
      </div>
      <div>
        
        <CustomerTable/>
        
      </div>
    </section>
  )
}

export default page