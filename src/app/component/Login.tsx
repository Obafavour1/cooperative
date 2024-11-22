'use client'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import {useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type LoginForm = {
  email: string;
  password: string;
};

const urlApi = 'https://cooperative-server-a77x.onrender.com/auth/login'



const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState<LoginForm>();
  const router = useRouter()

  const onSubmit:SubmitHandler<LoginForm> = (data) => {
    setLoginData(data);  // Sets login data when form is submitted
  };

  useEffect(() => {
    const login = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          urlApi,
          {...loginData,  "userType": "cooperativeStaff"},  // Pass login data here as the request payload
          {
            headers: {
              'Content-Type': 'application/json',
            },
            // withCredentials: true,
          }
        );
        if(response.status ===  200 || response.status ===  201 ){
          console.log('Login successful', response.data);
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.data.user));
          localStorage.setItem('cooperativeid', response.data.data.user.cooperativeId);
        } 
        setTimeout(() => {
          router.push("/admin"); // Navigate to dashboard
        }, 500);
        
      } catch (err) {
        console.error('This is showing:', err);
      } finally {
        setLoading(false);  // Ensure loading is stopped in both success and error cases
      }
    };

    if (loginData) {
      login(); // Call the login function only if loginData is set
    }
    
  }, [loginData, router]);  // Dependency on loginData



  return (
    <section className='bg-accent px-5 md:px-10 w-full h-screen flex justify-center items-center'>
        <div className='bg-background  md:w-1/2 min-h-1/2 flex'>
          <div className='py-10  px-10'>
            <h2 className='heading2'>Welcome back!</h2>
            <p className='font-semibold'>Enter your Credentials to access your account</p>

            <form onSubmit={handleSubmit(onSubmit)} action="" className='grid mt-10 gap-y-5'>
              <div className='formDiv'>
                <label htmlFor="">Email address</label>
                <input {...register('email',{required:true})} type="email"  className='input'/>
              </div>
              <div className='formDiv'>
                <label htmlFor="">Password</label>
                <input {...register('password',{required:true})} type="password"  className='input' />
              </div>
              <Button type='submit' disabled={loading}>{loading?<h2>Wait loading...</h2>: <h2>Login</h2>}</Button>
            </form>
          </div>
          {/* <div>
            <h1>picture</h1>
          </div> */}
        </div>
    </section>
  )
}

export default Login