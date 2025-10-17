"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import googleIcon from "./../public/devicon_google.png"
import facebookIcon from "./../public/logos_facebook.png"
import LoginImage from "./../public/login_image.png"
import Image from 'next/image'
import Mail from "./../public/mdi-light_email_2.png"
import Lock from "./../public/si_lock-duotone_1.png"
import EyeOff from "./../public/mdi_eye_1.png"
import { useRouter } from 'next/navigation'
import Header from './component/header'

function Login() {
  // form state
  const [data, setData] = useState({password:"", email:""})
  const [error,setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  // handlers
  const handleChangeEmail = (e : React.ChangeEvent<HTMLInputElement>) => setData({...data, email: e.target.value})
  const handleChangePassword = (e : React.ChangeEvent<HTMLInputElement>) => setData({...data, password: e.target.value})
  const handleSubmit = (e : React.FormEvent) => {
    setLoading(true)
    setError("")
    e.preventDefault()
      // validate fields
    if(!data.email || !data.password) {
      setError("All fields are required")
      setLoading(false)
      return
    }else {
      // validate password length
      if(data.password.length < 6) {
        setError("Password must be at least 6 characters")
        setLoading(false)
        return
      }
      //validate email format using regex
     if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(data.email)) {
       setError("Invalid email format")
       return
     }
     setData({email:"", password:""})
     setError("")
     setLoading(false)
     setSuccess(true)
     setTimeout(() => {
      router.push('/dashboard')
     }, 2000);
    }
  } 
  return (
    <div className="text-[#425B90]">
      <Header />
      <div className='flex w-full xl:px-30'>
          <div  className='w-[100%] lg:flex justify-center items-center hidden'>
              <Image src={LoginImage} alt='login Image' className='w-[50%]'/>
          </div>
        <form className="lg:mr-[5%] xl:mr-[10%] max-w-[28rem] xl:max-w-[30rem] flex flex-col gap-y-4 md:gap-y-5 justify-center min-h-screen p-4 w-[100%] mx-auto">
          <h1 className="text-[1.6rem] md:text-3xl font-semibold mr-auto ">
            Sign In
          </h1>
          <p className="text-muted-foreground mb-3 leading-5">
            Welcome back to Jemipa! We're glad to see you again.
          </p>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          {success && <p className='text-green-700 text-sm'>Login Successful! Redirecting...</p>}
          <div className="space-y-5 w-full max-w-md">
            <div className="relative ">
              <div className="absolute inset-0 my-auto left-5 size-6">
                  <Image src={Mail} alt='email'/>
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-12 h-12 appearance-none outline-none  focus:ring-0 border-[1px] border-[#9FD4EF]/50 rounded-lg focus:shadow-md text-lg placeholder:text-[#9FD4EF]" 
                value={data.email}
                onInput={handleChangeEmail}
                required={true}
                />
            </div>
            <div className="relative ">
              <div className="absolute inset-0 my-auto left-5 size-6">
                <Image src={Lock} alt='Lock'/>
              </div>
              <div className="absolute inset-y-0 my-auto right-5 size-5">
                  <Image src={EyeOff} alt='eye off'/>
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-12 h-12 appearance-none outline-none  focus:ring-0 border-[1px] border-[#9FD4EF]/50 rounded-lg focus:shadow-md text-lg placeholder:text-[#9FD4EF]"
                onInput={handleChangePassword}
                required={true}
              />
            </div>
            <div>
              <div className="flex justify-between text-[.9rem]">
                <div className="flex text-muted-foreground items-center gap-x-2">
                  <input type="checkbox" className='h-7 '/>
                  <span className="leading-4">Remember me</span>
                </div>
                <p>Forgot password?</p>
              </div>
            </div>
            <button
              type="button"
              className="w-full bg-[#425B90] text-white py-3 rounded-lg hover:bg-[#425B90]/90"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
          <div>
            <p className="text-[.9rem] md:text-[.95rem] text-center my-2 md:my-3 lg:my-5 text-muted-foreground">
              Or Continue with
            </p>
            <div className="flex items-center justify-between gap-x-3">
              <div className="basis-1/2 py-2 md:py-3 flex justify-center bg-muted-foreground/5 hover:bg-muted-foreground/10 cursor-pointer rounded">
                <figure className="size-5 md:size-7">
                  <Image src={googleIcon} alt="google_icon" className="size-full" />
                </figure>
              </div>
              <div className="basis-1/2 py-2 md:py-3 flex justify-center bg-muted-foreground/5 hover:bg-muted-foreground/10 cursor-pointer rounded">
                <figure className="size-5 md:size-7">
                  <Image
                    src={facebookIcon}
                    alt="facebook_icon"
                    className="size-full"
                  />
                </figure>
              </div>
            </div>
          </div>
          <p className="mt-2 md:mt-4">
            Don't have an account?
            <Link href="#" className="text-primary underline">
              Register here
            </Link>
          </p>
        </form>
        </div>
    </div>
  )
}

export default Login
