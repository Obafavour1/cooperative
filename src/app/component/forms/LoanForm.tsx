"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { LoanInput } from '@/app/data'


const LoanForm = () => {
  const [loading, setLoading]=useState(false)
  const [serverResponse,setServerResponse]=useState<string|null>(null)

  const {register,handleSubmit,formState:{errors}} =useForm<LoanInput>()
  
  const onSubmit:SubmitHandler<LoanInput> = async (data) =>{
    setLoading(true)
    setServerResponse(null)

    try{
        // call my api endpoint
        const response = await fetch("http://api.com/submit",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)

        });

            // Check if response was succesful
        if(!response.ok){
            throw new Error("Failed to submit")
        }

        // set response message
        // const result = await response.json();
        setServerResponse("Form submitted succesfully!")
    }catch (error){
        console.error("Submission error:", error)
        setServerResponse("There was an error submitting the form")
    }finally{
        setLoading(false)
    }

    
}
  return (
    <div className='w-[60vw] mx-auto'>
        <form action="" onSubmit={handleSubmit(onSubmit)} className=''>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <div className='formDiv'>
                <label className='font-medium text-primary' htmlFor="">Borrower Id</label>
                <input {...register('borrowerId',{required:true})} type="number" placeholder='Enter borrower Id' className='input'/>
              </div>
              {errors.borrowerId && <p role="alert" className='text-red-400'>Borrower Id is required</p>}
            </div>

            <div>
              <div className='formDiv'>
                <label className='font-medium text-primary' htmlFor="">Principal amount</label>
                <input {...register('principalAmount',{required:true})} className='input' type="number" placeholder='Enter principal amount'/>
              </div>
              {errors.principalAmount && <p role="alert" className='text-red-400'>Principal amount is required</p>}
            </div>

            <div>
              <div className='formDiv'>
                <label className='font-medium text-primary' htmlFor="">Outstanding Balance</label>
                <input {...register('outstandingBalance',{required:true})} placeholder='Enter outstanding balance' className='input' type="number" />
              </div>
              {errors.outstandingBalance && <p role="alert" className='text-red-400'>Outstanding Balance is required</p>}
            </div>

           <div>
            <div className='formDiv' >
                  <label className='font-medium text-primary' htmlFor="">Interest rate</label>
                  <input {...register('interestRate',{required:true})} defaultValue='0.1' className='input' type="number" />
              </div>
              {errors.interestRate && <p role="alert" className='text-red-400'>Interest rate is required</p>}
           </div>

            <div>
              <div className='formDiv' >
                  <label className='font-medium text-primary' htmlFor="">Defaulted fee rate</label>
                  <input {...register('defaultedFeeRate',{required:true})} defaultValue='0.02' className='input' type="number" />
              </div>
              {errors.defaultedFeeRate && <p role="alert" className='text-red-400'></p>}
            </div>

            <div>
              <div className='formDiv' >
                  <label className='font-medium text-primary' htmlFor="">Term start date</label>
                  <input {...register('termStartDate',{required:true})}  className='input' type="date" />
              </div>
              {errors.termStartDate && <p role="alert" className='text-red-400'>Term start date is required</p>}
            </div>

            <div>
              <div className='formDiv' >
                  <label className='font-medium text-primary' htmlFor="">Next interest date</label>
                  <input {...register('nextInterestDate',{required:true})}  className='input' type="date" />
              </div>
              {errors.nextInterestDate && <p role="alert" className='text-red-400'>Interest rate date is required</p>}
            </div>
           
           <div>
            <div className='formDiv' >
                  <label className='font-medium text-primary' htmlFor="">Pending payment</label>
                  <input {...register('pendingPayment',{required:true})} defaultValue='0' className='input' type="number" />
              </div>
              {errors.pendingPayment && <p role="alert" className='text-red-400'>Pending payment is required</p>}
           </div>
            
            <div>
              <div className='formDiv' >
                  <label className='font-medium text-primary' htmlFor="">Unpaid Interest</label>
                  <input {...register('unpaidInterest',{required:true})} defaultValue='0' className='input' type="number" />
              </div>
              {errors.unpaidInterest && <p role="alert" className='text-red-400'>Unpaind inerest is required</p>}
            </div>

          </div>

          <Button type='submit' disabled={loading} className='mt-10 w-1/2 mx-auto'>{loading? "Submitting": "Submitted"}</Button>
          <div>{serverResponse}</div>
        </form>
    </div>
  )
}

export default LoanForm