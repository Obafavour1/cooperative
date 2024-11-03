"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CollateralInput } from '@/app/data'

const CollateralForm = () => {
    const[loading, setLoading]= useState(false)
    const[serverResponse, setServerResponse]=useState<string|null>(null)

    const {register, handleSubmit, formState:{errors}} = useForm<CollateralInput>()

    const onSubmit:SubmitHandler<CollateralInput> = async (data) =>{
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
            const result = await response.json();
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
        <form action="" onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
            <div className='formDiv'>
                <label htmlFor="">UserId</label>
                <input {...register('userId',{required:true})} className='input' type="text" placeholder='Type in your user id'/>
            </div>
            {errors.userId && <p role="alert" className='text-red-400'>User Id is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Collateral Type</label>
                <input {...register('type',{required:true})} className='input' type="text" placeholder='What type of collateral'/>
            </div>  
            {errors.userId && <p role="alert" className='text-red-400'>Collateral type is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Collateral Description</label>
                <input {...register('description',{required:true})} className='input' type="text" placeholder='Give the description of the collateral'/>
            </div>
            {errors.description && <p role="alert" className='text-red-400'>Collateral description is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Estimated Value</label>
                <input {...register('estimatedValue',{required:true})} type="number" placeholder='Enter collateral estimated value' className='input'/>
            </div>
            {errors.estimatedValue && <p role="alert" className='text-red-400'>Estimated value is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Ownership Document</label>
                <input {...register('ownershipDocument',{required:true})} type="file" name="" id=""  className='input' placeholder='Upload Document'/>
            </div>
            {errors.ownershipDocument && <p role="alert" className='text-red-400'>Ownership document is required</p>}

            <div className='flex gap-5'>
                <input {...register('agreeToTerms',{required:true})} type="checkbox" name="" id="" />
                <label htmlFor="">Agree To Terms</label>
                
            </div>
            {errors.agreeToTerms && <p role="alert" className='text-red-400'>Tick the box to continue</p>}

            <Button type='submit' disabled={loading}>{loading? "Submitting" : "Submit"}</Button>
        </form>
   </div>)
}

export default CollateralForm