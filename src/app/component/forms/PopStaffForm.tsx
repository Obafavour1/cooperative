'use client'
import { Button } from '@/components/ui/button'
import { 
    Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
 } from '@/components/ui/dialog'
import axios from 'axios'
// import { error } from 'console'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm , SubmitHandler} from 'react-hook-form'

const urlApi = 'https://cooperative-server-a77x.onrender.com/staff/create'

enum Gender {
    male = 'male',
    female = 'female'
}

interface StaffPop {
    firstName: string,
    lastName: string,
    email: string,
    countryCode: string,
    phoneNumber: string,
    gender: Gender
    address: string,
    password: string
}

const PopStaffForm = () => {
    const {register,handleSubmit, formState:{errors}} =useForm<StaffPop>()
    const [loadingData, setLoadingData] = useState<StaffPop>()
    const [loading, setLoading]=useState(false)
    const router = useRouter()

    const onSubmit:SubmitHandler<StaffPop> = (data) => {
        setLoadingData(data);  // Sets login data when form is submitted
      };

    useEffect(()=>{
        const StaffPop = async ()=>{
            try{
                setLoading(true)
                const response = await axios.post(
                    urlApi,
                    {...loadingData},
                    {
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        // withCredentials: true,
                      }

                )

                if(response.status ===  200 || response.status ===  201 ){
                    console.log('Login successful', response.data);
                    localStorage.setItem('token', response.data.data.token);
                    localStorage.setItem('user', JSON.stringify(response.data.data.user));
                    localStorage.setItem('cooperativeid', response.data.data.user.cooperativeId);
                }
                setTimeout(()=>{
                    router.push('/admin')
                }, 500)
            } catch (err){
                console.error("This shows error", err);
            } finally {
                setLoading(false)
            }
        }
        if(loadingData){
            StaffPop()
        }
        
    },[loadingData, router])

    // const onSubmit = async (data:{}) =>{
    //     try{
    //         console.log(data)

    //     }catch(error){
    //         console.error('This is the error:')
    //     }finally{
            
    //     }
        
    // }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Form</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Staff Profile</DialogTitle>
          <DialogDescription>
            Fill in the following        
          </DialogDescription>
        </DialogHeader>
            <section className=''>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className='formDiv'>
                        <label htmlFor="">Firstname</label>
                        <input className='input' {...register('firstName',{required: true})} type="text"  />
                    </div>
                    {errors.firstName && <p>Please fill in the firstname</p>}
                    <div className='formDiv'>
                        <label htmlFor="">Lastname</label>
                        <input className='input' {...register('lastName',{required: true})} type="text"  />
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="">Email</label>
                        <input className='input' {...register('email',{required: true})} type="text"  />
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="">Country Code</label>
                        <input className='input' {...register('countryCode',{required: true})} type="text"  />
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="">Phone number</label>
                        <input className='input' {...register('phoneNumber',{required: true})} type="text"  />
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="">Gender</label>
                        <select {...register('gender',{required:true})} name="" id="">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="">Gender</label>
                        <select {...register('gender',{required:true})} name="" id="">
                            <option value="">Role</option>
                            <option value="male">read-only</option>
                            <option value="female">limited-access</option>
                            <option value="female">full-access</option>
                            
                        </select>
                        
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="">Gender</label>
                        <select {...register('gender',{required:true})} name="" id="">
                            <option value="">Access level</option>
                            <option value="admin">admin</option>
                            <option value="sub-admin">sub-admin</option>
                            <option value="staff">staff</option>
                            <option value="accountant">accountant</option>
                            <option value="support">support</option>
                        </select>
                        
                    </div>
                    <div className='formDiv'>
                        <label htmlFor="">Address</label>
                        <input className='address' {...register('address',{required: true})} type="text"  />
                    </div>
                    
                    <Button type="submit">{loading? 'submittig':'Submit'}</Button>
                    
                </form>
            </section>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    
  )
}

export default PopStaffForm