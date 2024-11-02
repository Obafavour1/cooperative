"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { InvestmentInput } from '@/app/data'

// investorId: string;
// initialInvestment: number;
// currentBalance: number;
// monthlyInterestRate: number;
// lateFeeRate: number;
// investmentStartDate: Date | string;
// nextInterestDate: Date | string;

const InvestmentForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<InvestmentInput>()
    const onSubmit:SubmitHandler<InvestmentInput> =(data) =>console.log(data)
  return (
    <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} action="" className='grid gap-4'>
            <div className='formDiv'>
                <label htmlFor="">UserId</label>
                <input {...register('investorId',{required:true})} className='input' type="text" placeholder='Type in your user id'/>
            </div>
            {errors.investorId && <p role="alert">{errors.investorId.message}</p>}

            <div className='formDiv'>
                <label htmlFor="">Initial investment</label>
                <input {...register('initialInvestment',{required:true})} className='input' type="number" placeholder='What type of collateral'/>
            </div>     
            <div className='formDiv'>
                <label htmlFor="">Current balance</label>
                <input {...register('currentBalance',{required:true})} className='input' type="number" placeholder='Give the description of the collateral'/>
            </div>

            <div className='formDiv'>
                <label htmlFor="">Monthly interest rate</label>
                <input {...register('monthlyInterestRate',{required:true})} type="number" placeholder='Enter collateral estimated value' className='input'/>
            </div>

            <div className='formDiv'>
                <label htmlFor="">Investment start date</label>
                <input {...register('investmentStartDate',{required:true})} type="date" name="" id=""  className='input' placeholder='Upload Document'/>
            </div>

            <div className='formDiv'>
                <label htmlFor="">Next interest date</label>
                <input {...register('nextInterestDate',{required:true})} type="date" name="" id=""  className='input' placeholder='Upload Document'/>
            </div>

            {/* <div className='flex gap-5'>
                <input {...register('agreeToTerms',{required:true})} type="checkbox" name="" id="" />
                <label htmlFor="">Agree To Terms</label>
                
            </div> */}
            <Button type='submit'>Submit</Button>
        </form>
   </div>)
}

export default InvestmentForm