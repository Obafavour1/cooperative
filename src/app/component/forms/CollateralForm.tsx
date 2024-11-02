"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CollateralInput } from '@/app/data'

    // userId: string;
    // type: string; e.g., Car, Property
    // description?: string;
    // estimatedValue?: number;
    // ownershipDocument?: string;
    // agreeToTerms: boolean;

const CollateralForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<CollateralInput>()
    const onSubmit:SubmitHandler<CollateralInput> =(data) =>console.log(data)
  return (
    <div className=''>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
            <div className='formDiv'>
                <label htmlFor="">UserId</label>
                <input {...register('userId',{required:true})} className='input' type="text" placeholder='Type in your user id'/>
            </div>
            {errors.userId && <p role="alert">{errors.userId.message}</p>}

            <div className='formDiv'>
                <label htmlFor="">Collateral Type</label>
                <input {...register('type',{required:true})} className='input' type="text" placeholder='What type of collateral'/>
            </div>     
            <div className='formDiv'>
                <label htmlFor="">Collateral Description</label>
                <input {...register('description',{required:true})} className='input' type="text" placeholder='Give the description of the collateral'/>
            </div>

            <div className='formDiv'>
                <label htmlFor="">Estimated Value</label>
                <input {...register('estimatedValue',{required:true})} type="number" placeholder='Enter collateral estimated value' className='input'/>
            </div>

            <div className='formDiv'>
                <label htmlFor="">Ownership Document</label>
                <input {...register('ownershipDocument',{required:true})} type="file" name="" id=""  className='input' placeholder='Upload Document'/>
            </div>

            <div className='flex gap-5'>
                <input {...register('agreeToTerms',{required:true})} type="checkbox" name="" id="" />
                <label htmlFor="">Agree To Terms</label>
                
            </div>
            <Button type='submit'>Submit</Button>
        </form>
   </div>)
}

export default CollateralForm