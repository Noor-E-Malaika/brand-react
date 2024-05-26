import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#FFB6C1] p-4   '>
        <div className='max-w-[1240px] mx-auto md:flex justify-between'>
            <div className=' py-[40px] m-2  '>
            <h1 className='font-tittle text-[20px] md:text-[40px] font-bold text-white'>You want to buy Anything?</h1>
            <span className='text-white font-tittle font-bold'>Here some exciting jewelry</span>
            </div>
            <div className='m-2'>
               <input type="text" className='rounded mb-2 p-3 mr-2 text-slate-900 font-tittle' placeholder='Email' />
               <button className='font-tittle bg-[#00072D] mt-4 text-white p-3 rounded font-tittle'>Search now</button>
               <br />

               <p className='text-[#00072D] font-tittle'>We care about your wishes. Don't worry. <br /> 
                   <a href="" className='text-[#00072D] font-tittle'>Privacy Policy!</a>
               </p>
               
            </div>
        </div>
    </div>
  )
}
