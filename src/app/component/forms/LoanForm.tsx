"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { LoanInput } from '@/app/data'


const LoanForm = () => {
  const {register,handleSubmit,formState:{errors}} =useForm<LoanInput>()
  const onSubmit: SubmitHandler<LoanInput>=(data) =>console.log(data)
  return (
    <div className='w-[60vw]'>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
          <div className='formDiv'>
            <label htmlFor="">Borrower Id</label>
            <input {...register('borrowerId',{required:true})} type="number" placeholder='Enter borrower Id' className='input'/>
          </div>

          <div className='formDiv'>
            <label htmlFor="">Principal amount</label>
            <input {...register('principalAmount',{required:true})} className='input' type="number" placeholder='Enter principal amount'/>
          </div>

          <div className='formDiv'>
            <label htmlFor="">Outstanding Balance</label>
            <input {...register('outstandingBalance',{required:true})} placeholder='Enter outstanding balance' className='input' type="number" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Interest rate</label>
              <input {...register('interestRate',{required:true})} defaultValue='0.1' className='input' type="number" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Defaulted fee rate</label>
              <input {...register('defaultedFeeRate',{required:true})} defaultValue='0.02' className='input' type="number" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Term start date</label>
              <input {...register('termStartDate',{required:true})}  className='input' type="date" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Next interest date</label>
              <input {...register('interestRate',{required:true})}  className='input' type="date" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Pending payment</label>
              <input {...register('pendingPayment',{required:true})} defaultValue='0' className='input' type="number" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Unpaid Interest</label>
              <input {...register('unpaidInterest',{required:true})} defaultValue='0' className='input' type="number" />
          </div>

          <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

export default LoanForm