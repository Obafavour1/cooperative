import React from 'react'
import LoanTable from '../../component/table/LoanTable'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <section className=' sections bg-slate-50'>
      <div className='flex justify-between items-center'>
        <h2 className='heading2'>Loans</h2>
        <div className='flex gap-4'>
          <Link href='/loan_form'><Button>Apply for Loan</Button></Link>
          {/* <Link href='/loan_form'><Button>Loan Repayment</Button></Link> */}
        </div>
      </div>
      <div className='shadow-2xl bg-white rounded-lg'>
        
        <LoanTable/>
        
      </div>
    </section>
  )
}

export default page