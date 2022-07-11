import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className=' w-full text-white '>
        <img className='w-full h-[400px] object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/d638b1fe-b44f-4cb3-b5d8-2106904c3be0/IN-en-20220704-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8  ' >
          <h1 className='text-3xl md:text-5xl font-bold '>My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account