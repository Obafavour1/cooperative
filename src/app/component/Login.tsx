'use client'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import {useEffect, useState } from 'react'

type LoginForm = {
  email: string;
  password: string;
};

const urlApi = 'https://cooperative-server-a77x.onrender.com/auth/login'



const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState<LoginForm>();

  const onSubmit:SubmitHandler<LoginForm> = (data) => {
    setLoginData(data);  // Sets login data when form is submitted
  };

  useEffect(() => {
    const login = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          urlApi,
          loginData,  // Pass login data here as the request payload
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        console.log('Login successful', response.data);
        localStorage.setItem('token', response.data.token);
      } catch (err) {
        console.error('This is showing:', err);
      } finally {
        setLoading(false);  // Ensure loading is stopped in both success and error cases
      }
    };

    if (loginData) {
      login(); // Call the login function only if loginData is set
    }
  }, [loginData]);  // Dependency on loginData






  // const {register, handleSubmit} = useForm<LoginForm>()
  // const [loading, setLoading] =useState(false)
  // const [loginData, setLoginData] = useState(null)

  // const onSubmit = async (data:any)=>{
  //   setLoginData(data)
  // }


  // useEffect(()=>{
  //   if(loginData){
  //     const login = async () =>{
  //       setLoading(true)
  //       try{
  //         const response = await axios.post(urlApi,{
  //           header:{
  //             "Content-Type": 'application/json'
  //           },
  //           withCredentials:true
  //         })
  //         console.log('Login succesfull',response.data)
  //         localStorage.setItem('token', response.data.token)
  //       } catch(err){
  //         console.error('This is showing:', err)
  //       }
  //       setLoading(false)

  //     }
  //     login()
  //   } 
    
  // },[loginData])

  return (
    <section className='bg-accent w-full h-screen flex justify-center items-center'>
        <div className='bg-background w-1/2 min-h-1/2 flex'>
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
          <div>
            <h1>picture</h1>
          </div>
        </div>
    </section>
  )
}

export default Login