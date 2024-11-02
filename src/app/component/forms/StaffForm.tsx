"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface StaffInput {
  fullname: string
  email:string
  number: number
}

const StaffForm = () => {
  const {register,handleSubmit,formState:{errors}}= useForm<StaffInput>()
  const onSubmit:SubmitHandler<StaffInput>=(data)=>console.log(data)

  return (
    <div className='w-[60vw]'>

        <form action="" onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
          <div className='formDiv'>
            <label htmlFor="">First name</label>
            <input {...register('fullname',{required:true})} className='input' type="text" placeholder='Write the purpose for the loan'/>
          </div>
          {errors.fullname && <p role="alert">{errors.fullname.message}</p>}

          <div className='formDiv'>
            <label htmlFor="">Last name</label>
            <input {...register('fullname',{required:true})} className='input' type="text" placeholder='Write the purpose for the loan'/>
          </div>
          {errors.fullname && <p role="alert">{errors.fullname.message}</p>}
          <div className='formDiv'>
            <label htmlFor="">Country code</label>
            <input {...register('fullname',{required:true})} className='input' type="text" placeholder='Write the purpose for the loan'/>
          </div>     
 

          <div className='formDiv'>
            <label htmlFor="">Phone number</label>
            <input type="number" placeholder='Enter amount' className='input'/>
          </div>
          <div className='formDiv'>
            <label htmlFor="">Gender</label>
            <input className='input' type="text" placeholder='Write the purpose for the loan'/>
          </div>

          <div className='formDiv'>
            <label htmlFor="">Age</label>
            <input {...register('fullname',{required:true})} className='input' type="email" placeholder='Write the purpose for the loan'/>
          </div>

          <div className='formDiv'>
            <label htmlFor="">Address</label>
            <input {...register('fullname',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Nationality</label>
              <input {...register('fullname',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Country</label>
              <input {...register('fullname',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">State</label>
              <input {...register('fullname',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Local Government Area</label>
              <input {...register('fullname',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Degree</label>
              <input {...register('fullname',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Instituition attended</label>
              <input className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Date of birth</label>
              <input {...register('fullname',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv'>
            <label htmlFor="">Account name</label>
            <input {...register('fullname',{required:true})} className='input' type="text" placeholder='Write the purpose for the loan'/>
          </div>
          <div className='formDiv'>
            <label htmlFor="">Bank Code</label>
            <input className='input' type="text" placeholder='Write the purpose for the loan'/>
          </div>
          <div className='formDiv'>
            <label htmlFor="">Bank name</label>
            <input {...register('fullname',{required:true})} className='input' type="text" placeholder='Write the purpose for the loan'/>
          </div>
          <div className='formDiv'>
            <label htmlFor="">Account number</label>
            <input {...register('fullname',{required:true})} className='input' type="number" placeholder='Write the purpose for the loan'/>
          </div>
          <div className='formDiv'>
            <label htmlFor="">Home address</label>
            <input {...register('fullname',{required:true})} className='input' type="text" placeholder='Write the purpose for the loan'/>
          </div>
          <div className='formDiv'>
            <label htmlFor="">Email</label>
            <input {...register('fullname',{required:true})} className='input' type="text" placeholder='Write the purpose for the loan'/>
          </div>
          <Button type='submit'>Submit</Button>
        </form>
        
    </div>
  )
}

export default StaffForm