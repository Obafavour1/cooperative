'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { CustomerInput } from '@/app/data'
import { useForm , SubmitHandler} from 'react-hook-form'


const CustomerForm = () => {
    const {register, handleSubmit, formState:{errors}}=useForm<CustomerInput>()
    const onSubmit: SubmitHandler<CustomerInput>=(data)=>console.log(data)

  return (
    <div className='w-[60vw] mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} action="" className='grid gap-4'>
          <div className='formDiv'>
            <label htmlFor="">Full Name</label>
            <input  {...register('fullName',{required:true})} className='input' type="text" placeholder='Type in your full name'/>
          </div>
          {errors.fullName && <p role="alert">{errors.fullName.message}</p>}

          <div className='formDiv'>
            <label htmlFor="">Date of Birth</label>
            <input {...register('dateOfBirth',{required:true})} className='input' type="text" placeholder='Type in your date of birth'/>
          </div>     
          <div className='formDiv'>
            <label htmlFor="">Marital Status</label>
            <input {...register('maritalStatus',{required:true})} className='input' type="text" placeholder='Type in your marital status'/>
          </div>

          <div className='formDiv'>
            <label htmlFor="">Phone number</label>
            <input type="number" placeholder='Type in your phone number' {...register('phoneNumber',{required:true})} className='input'/>
          </div>

          <div className='formDiv'>
            <label htmlFor="">Email</label>
            <input {...register('email',{required:true})} className='input' type="email" placeholder='Type in your email'/>
          </div>

          <div className='formDiv'>
            <label htmlFor="">Address</label>
            <input {...register('address',{required:true})} placeholder='Type in your address' className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Street</label>
              <input {...register('street',{required:true})} placeholder='Type in your street name' className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">City</label>
              <input {...register('city',{required:true})} placeholder='Type in your city name' className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">State</label>
              <input {...register('state',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Postal Code</label>
              <input {...register('postalCode',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Nationality</label>
              <input {...register('nationality',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Identification Number</label>
              <input {...register('identification',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Bank Verification Number</label>
              <input {...register('bvn',{required:true})} className='input' type="text" />
          </div>

            
          {/* Next of Kin */}
          <h3 className='font-medium text-[24px] mt-3'>Next of Kin</h3>
          <div className='formDiv' >
              <label htmlFor="">Full name</label>
              <input {...register('nextOfKin.fullName',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Relationship</label>
              <input {...register('nextOfKin.relationship',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Phone number</label>
              <input {...register('nextOfKin.phoneNumber')} className='phoneNumber' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Address</label>
              <input {...register('nextOfKin.address',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Street</label>
              <input {...register('street',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">City</label>
              <input {...register('nextOfKin.city',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">State</label>
              <input {...register('nextOfKin.state',{required:true})} className='input' type="text" />
          </div>


        
          {/* Employment Info */}
          <h3 className='font-medium text-[24px] mt-3'>Employment Information</h3>
          <div className='formDiv' >
              <label htmlFor="">Employment status</label>
              <input {...register('employmentInfo.employmentStatus',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Employer name</label>
              <input {...register('employmentInfo.employerName',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Employer address</label>
              <input {...register('employmentInfo.employerAddress',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Street</label>
              <input {...register('employmentInfo.street',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">City</label>
              <input {...register('employmentInfo.city',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">State</label>
              <input {...register('employmentInfo.state',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Monthly income</label>
              <input {...register('employmentInfo.monthlyIncome',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Job title</label>
              <input {...register('employmentInfo.jobTitle',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Employment duration</label>
              <input {...register('employmentInfo.employmentDuration',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Membership type</label>
              <input {...register('membershipType',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Start Date</label>
              <input {...register('startDate',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">End Date</label>
              <input {...register('endDate',{required:true})} className='input' type="text" />
          </div>
          <div className='formDiv' >
              <label htmlFor="">Membership Id</label>
              <input {...register('membershipID',{required:true})} className='input' type="text" />
          </div>
          <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

export default CustomerForm