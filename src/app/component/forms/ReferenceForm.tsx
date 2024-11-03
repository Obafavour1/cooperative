"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { RefereesInput } from '@/app/data'



const RefereeForm = () => {
    const [loading, setLoading] =useState(false)
    const[serverResponse, setServerResponse] = useState<string|null>()

    const {register,handleSubmit, formState:{errors}} = useForm<RefereesInput>()
    
    const onSubmit:SubmitHandler<RefereesInput> = async (data) =>{
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
        <form onSubmit={handleSubmit(onSubmit)} action="" className='grid gap-4'>
            <div className='formDiv'>
                <label htmlFor="">Full Name</label>
                <input {...register('fullName',{required:true})} className='input' type="text" placeholder='Type your full name'/>
            </div>
            {errors.fullName && <p role="alert" className='text-red-400'>Full name is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Relationship</label>
                <input {...register('relationship',{required:true})} className='input' type="text" placeholder='What relationship do you share'/>
            </div>     
            {errors.relationship && <p role="alert" className='text-red-400'>Relationship is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Contact number</label>
                <input {...register('contactNumber',{required:true})} className='input' type="text" placeholder='Type in your number'/>
            </div>
            {errors.contactNumber && <p role="alert" className='text-red-400'>Contact number is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Address</label>
                <input {...register('address',{required:true})} type="text" placeholder='Type in your address' className='input'/>
            </div>
            {errors.address && <p role="alert" className='text-red-400'>Address is required</p>}

            <div className='formDiv'>
                <label htmlFor="">Street</label>
                <input {...register('street',{required:true})} className='input' type="text" placeholder='Type in your street'/>
            </div>
            {errors.street && <p role="alert" className='text-red-400'>Street is required</p>}

            <div className='formDiv'>
                <label htmlFor="">City</label>
                <input {...register('city',{required:true})} className='input' placeholder='Type in your city' type="text" />
            </div>
            {errors.city && <p role="alert" className='text-red-400'>City is required</p>}

            <div className='formDiv' >
                <label htmlFor="">State</label>
                <input {...register('state',{required:true})} className='input' placeholder='Type in your city' type="text" />
            </div>
            {errors.state && <p role="alert" className='text-red-400'>State is required</p>}

            <Button type='submit' disabled={loading}>{loading? "Submitting" :'Submit'}</Button>
        </form>
   </div>)
}

export default RefereeForm