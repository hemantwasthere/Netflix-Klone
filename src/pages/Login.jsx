import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { logIn } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            navigate('/')
            toast.success('Welcome back !', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                darkMode: true,
            });
        } catch (error) {
            console.log(error)
            toast.error(error.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                darkMode: true,
            });
        }
    }


    return (
        <>
            <div className='w-full h-screen  '>

                <img className='hidden sm:block absolute w-full h-full object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/d638b1fe-b44f-4cb3-b5d8-2106904c3be0/IN-en-20220704-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

                <div className='fixed w-full px-4 py-24 z-50 '>

                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ' >
                        <div className='max-w-[320px] mx-auto py-16 '  >

                            <h1 className='text-3xl font-bold  '>Sign In</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4 ' >

                                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-red-600 ' type="email" placeholder='Email' autoComplete='email' />

                                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-red-600 ' type="password" placeholder='Password' autoComplete='current-password' />

                                <button className=' bg-red-600 py-3 my-6 rounded font-bold ' >Sign In</button>

                                <div className='flex justify-between items-center text-sm text-gray-600 '>
                                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                                    <p>Need Help?</p>
                                </div>

                                <p className='py-8'>
                                    <span className='text-gray-600'>
                                        New to Netflix?
                                    </span>{' '}
                                    <Link to='/signup'>Sign Up</Link>
                                </p>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login