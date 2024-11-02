"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { RefereesInput } from '@/app/data'



const RefereeForm = () => {
    const {register,handleSubmit, formState:{errors}} = useForm<RefereesInput>()
    const onSubmit: SubmitHandler<RefereesInput> = (data) => console.log(data)

  return (
    <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} action="" className='grid gap-4'>
            <div className='formDiv'>
                <label htmlFor="">Full Name</label>
                <input {...register('fullName',{required:true})} className='input' type="text" placeholder='Type your full name'/>
            </div>
            <div className='formDiv'>
                <label htmlFor="">Relationship</label>
                <input {...register('relationship',{required:true})} className='input' type="text" placeholder='What relationship do you share'/>
            </div>     
            <div className='formDiv'>
                <label htmlFor="">Contact number</label>
                <input {...register('contactNumber',{required:true})} className='input' type="text" placeholder='Type in your number'/>
            </div>

            <div className='formDiv'>
                <label htmlFor="">Address</label>
                <input {...register('address',{required:true})} type="text" placeholder='Type in your address' className='input'/>
            </div>

            <div className='formDiv'>
                <label htmlFor="">Street</label>
                <input {...register('street',{required:true})} className='input' type="email" placeholder='Type in your street'/>
            </div>

            <div className='formDiv'>
                <label htmlFor="">City</label>
                <input {...register('city',{required:true})} className='input' placeholder='Type in your city' type="text" />
            </div>
            <div className='formDiv' >
                <label htmlFor="">State</label>
                <input {...register('state',{required:true})} className='input' placeholder='Type in your city' type="text" />
            </div>
            <Button type='submit'>Submit</Button>
        </form>
   </div>)
}

export default RefereeForm