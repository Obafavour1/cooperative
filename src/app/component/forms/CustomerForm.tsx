'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CustomerInput } from '@/app/data'
import { useForm , SubmitHandler} from 'react-hook-form'
// import { toast } from "sonner"


const CustomerForm = () => {
    const [loading,setLoading]=useState(false)
    const[serverResponse,setServerResponse]= useState<string|null>(null)
    
    
    const {register, handleSubmit, formState:{errors}}=useForm<CustomerInput>()
   
    const onSubmit:SubmitHandler<CustomerInput> = async (data) =>{
        setLoading(true)
        setServerResponse(null)

        try{
            // call my api endpoint
            const response = await fetch("https://cooperative-server-a77x.onrender.com/ /customer/create",{
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
            console.log(serverResponse)
        }

        
    }

  return (
    <div className='w-[60vw] mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} action="" className=''>
        <h3 className='font-medium text-[24px] mt-3 mb-2'>Personal Details</h3>
  
        <div className='grid gap-4 grid-cols-2'>
            <div>
                    
                <div className='formDiv'>
                    <label htmlFor="">Full Name</label>
                    <input  {...register('fullName',{required:true})} className='input' type="text" placeholder='Type in your full name'/>
                </div>
                {errors.fullName && <p role="alert">Full name is required</p>}
            </div>

            <div>
                    
                            <div className='formDiv'>
                                <label htmlFor="">Date of Birth</label>
                                <input {...register('dateOfBirth',{required:true})} className='input' type="string" placeholder='Type in your date of birth'/>
                            </div> 
                            {errors.dateOfBirth && <p role="alert">Date of birth is required</p>}
            </div>

            <div>
                    
                            <div className='formDiv'>
                                <label htmlFor="">Marital Status</label>
                                <input {...register('maritalStatus',{required:true})} className='input' type="text" placeholder='Type in your marital status'/>
                            </div>
                            {errors.maritalStatus && <p role="alert">Marital status is required</p>}
            </div>

            <div>
                    
                <div className='formDiv'>
                    <label htmlFor="">Phone number</label>
                    <input type="number" placeholder='Type in your phone number' {...register('phoneNumber',{required:true})} className='input'/>
                </div>
                {errors.phoneNumber && <p role="alert">Phone number is required</p>}
            </div>

            <div>
                    
                <div className='formDiv'>
                    <label htmlFor="">Email</label>
                    <input {...register('email',{required:true})} className='input' type="email" placeholder='Type in your email'/>
                </div>
                {errors.email && <p role="alert">Email is required</p>}
            </div>

            <div>
                    
                <div className='formDiv'>
                    <label htmlFor="">Address</label>
                    <input {...register('address',{required:true})} placeholder='Type in your address' className='input' type="text" />
                </div>
                {errors.address && <p role="alert">Address is required</p>}
            </div>

            <div>
                    
                <div className='formDiv' >
                    <label htmlFor="">Street</label>
                    <input {...register('street',{required:true})} placeholder='Type in your street name' className='input' type="text" />
                </div>
                {errors.street && <p role="alert">Street is required</p>}
            </div>

            <div>
                    
                <div className='formDiv' >
                    <label htmlFor="">City</label>
                    <input {...register('city',{required:true})} placeholder='Type in your city name' className='input' type="text" />
                </div>
                {errors.city && <p role="alert">City is required</p>}
            </div>

            <div>
                    
                <div className='formDiv' >
                    <label htmlFor="">State</label>
                    <input {...register('state',{required:true})} className='input' type="text" />
                </div>
                {errors.state && <p role="alert">State is required</p>}
            </div>

            <div>
                    
                <div className='formDiv' >
                    <label htmlFor="">Postal Code</label>
                    <input {...register('postalCode',{required:true})} className='input' type="text" />
                </div>
                {errors.postalCode && <p role="alert">Postal code is required</p>}
            </div>

            <div>
                    
                <div className='formDiv' >
                    <label htmlFor="">Nationality</label>
                    <input {...register('nationality',{required:true})} className='input' type="text" />
                </div>
                {errors.nationality && <p role="alert">Nationality is required</p>}
            </div>

            <div>
                    
                <div className='formDiv' >
                    <label htmlFor="">Identification Number</label>
                    <input {...register('identification',{required:true})} className='input' type="text" />
                </div>
                {errors.identification && <p role="alert">Identification number is required</p>}
            </div>

            <div>
                    
                <div className='formDiv' >
                    <label htmlFor="">Bank Verification Number</label>
                    <input {...register('bvn',{required:true})} className='input' type="text" />
                </div>
                {errors.bvn && <p role="alert">BVN is required</p>}
            </div>
        </div>

            
          {/* Next of Kin */}
          <h3 className='font-medium text-[24px] mt-3 mb-2'>Next of Kin</h3>
          {/* <div className='grid grid-cols-2 gap-4'>
          <div>
            
                <div className='formDiv' >
                    <label htmlFor="">Full name</label>
                    <input {...register('nextOfKin.fullName',{required:true})} className='input' type="text" />
                </div>
                {errors.nextOfKin?.fullName && <p role="alert">Full name is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Relationship</label>
                    <input {...register('nextOfKin.relationship',{required:true})} className='input' type="text" />
                </div>
                {errors.nextOfKin?.relationship && <p role="alert">Relationship is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Phone number</label>
                    <input {...register('nextOfKin.phoneNumber')} className='input' type="text" />
                </div>
                {errors.nextOfKin?.phoneNumber && <p role="alert">Phone number is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Address</label>
                    <input {...register('nextOfKin.address',{required:true})} className='input' type="text" />
                </div>
                {errors.nextOfKin?.address && <p role="alert">Address is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Street</label>
                    <input {...register('street',{required:true})} className='input' type="text" />
                </div>
                {errors.street && <p role="alert">Street is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">City</label>
                    <input {...register('nextOfKin.city',{required:true})} className='input' type="text" />
                </div>
                {errors.city && <p role="alert">City is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">State</label>
                    <input {...register('nextOfKin.state',{required:true})} className='input' type="text" />
                </div>
                {errors.state && <p role="alert">State is required</p>}</div>
          </div> */}

          


        
          {/* Employment Info */}
          <h3 className='font-medium text-[24px] mt-3 mb-2'>Employment Information</h3>
          {/* <div className='grid grid-cols-2 gap-4'>
          <div>
            
                <div className='formDiv' >
                    <label htmlFor="">Employment status</label>
                    <input {...register('employmentInfo.employmentStatus',{required:true})} className='input' type="text" />
                </div>
                {errors.employmentInfo?.employmentStatus && <p role="alert">Employment status is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Employer name</label>
                    <input {...register('employmentInfo.employerName',{required:true})} className='input' type="text" />
                </div>
                {errors.employmentInfo?.employerName && <p role="alert">Employer name is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Employer address</label>
                    <input {...register('employmentInfo.employerAddress',{required:true})} className='input' type="text" />
                </div>
                {errors.employmentInfo?.employerAddress && <p role="alert">Employer address is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Street</label>
                    <input {...register('employmentInfo.street',{required:true})} className='input' type="text" />
                </div>
                {errors.employmentInfo?.employerName && <p role="alert">Employer name is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">City</label>
                    <input {...register('employmentInfo.city',{required:true})} className='input' type="text" />
                </div>
                {errors.employmentInfo?.city && <p role="alert">City is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">State</label>
                    <input {...register('employmentInfo.state',{required:true})} className='input' type="text" />
                </div>
                {errors.employmentInfo?.state && <p role="alert">State is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Monthly income</label>
                    <input {...register('employmentInfo.monthlyIncome',{required:true})} className='input' type="number" />
                </div>
                {errors.employmentInfo?.monthlyIncome && <p role="alert">Monthly income is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Job title</label>
                    <input {...register('employmentInfo.jobTitle',{required:true})} className='input' type="text" />
                </div>
                {errors.employmentInfo?.jobTitle && <p role="alert">Job title is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Employment duration</label>
                    <input {...register('employmentInfo.employmentDuration',{required:true})} className='input' type="text" />
                </div>
                {errors.employmentInfo?.employmentDuration && <p role="alert">Employment duration is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Membership type</label>
                    <input {...register('membershipType',{required:true})} className='input' type="text" />
                </div>
                {errors.membershipType && <p role="alert">Membership type is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">Start Date</label>
                    <input {...register('startDate',{required:true})} className='input' type="date" />
                </div>
                {errors.startDate && <p role="alert">Start date is required</p>}</div>

<div>

                <div className='formDiv' >
                    <label htmlFor="">End Date</label>
                    <input {...register('endDate',{required:true})} className='input' type="date" />
                </div>
                {errors.endDate && <p role="alert">End date is required</p>}</div>

<div>

    <div className='formDiv' >
        <label htmlFor="">Membership Id</label>
        <input {...register('membershipID',{required:true})} className='input' type="text" />
    </div>
    {errors.membershipID && <p role="alert">Membership Id is required</p>}</div>

          </div> */}
          <Button type='submit' className='w-1/2 mx-auto mt-10 ' disabled={loading}>{loading? "Submitting" :"Submit"}</Button>
          <div>{serverResponse}</div>
        </form>
    </div>
  )
}

export default CustomerForm