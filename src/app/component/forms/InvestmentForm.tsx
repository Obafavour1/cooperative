"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { InvestmentInput } from '@/app/data'


const InvestmentForm = () => {
    const [loading, setLoading] =useState(false)
    const[serverResponse, setServerResponse]=useState<string|null>(null)

    const {register, handleSubmit, formState:{errors}} = useForm<InvestmentInput>()
    
    const onSubmit:SubmitHandler<InvestmentInput> = async (data) =>{
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
    <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} action="" className='grid gap-4'>
            <div className='formDiv'>
                <label htmlFor="">UserId</label>
                <input {...register('investorId',{required:true})} className='input' type="text" placeholder='Type in your user id'/>
            </div>
            {errors.investorId && <p role="alert">InvestorId is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Initial investment</label>
                <input {...register('initialInvestment',{required:true})} className='input' type="number" placeholder='What type of collateral'/>
            </div>     
            {errors.initialInvestment && <p role="alert">Initial Investment is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Current balance</label>
                <input {...register('currentBalance',{required:true})} className='input' type="number" placeholder='Give the description of the collateral'/>
            </div>
            {errors.currentBalance && <p role="alert">Current balance is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Monthly interest rate</label>
                <input {...register('monthlyInterestRate',{required:true})} type="number" placeholder='Enter collateral estimated value' className='input'/>
            </div>
            {errors.monthlyInterestRate && <p role="alert">monthlyInerestRate is required</p>}


            <div className='formDiv'>
                <label htmlFor="">Investment start date</label>
                <input {...register('investmentStartDate',{required:true})} type="date" name="" id=""  className='input' placeholder='Upload Document'/>
            </div>
            {errors.investmentStartDate && <p role="alert">Investment start date is required</p>}


            <div className='formDiv'>
                <label htmlFor="">Next interest date</label>
                <input {...register('nextInterestDate',{required:true})} type="date" name="" id=""  className='input' placeholder='Upload Document'/>
            </div>
            {errors.nextInterestDate && <p role="alert">Next interest rate is required</p>}

            {/* <div className='flex gap-5'>
                <input {...register('agreeToTerms',{required:true})} type="checkbox" name="" id="" />
                <label htmlFor="">Agree To Terms</label>
                
            </div> */}
            <Button type='submit' disabled={loading}>{loading? 'Submitting' : 'Submit'}</Button>
            <div>{serverResponse}</div>
        </form>
   </div>)
}

export default InvestmentForm