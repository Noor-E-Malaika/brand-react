import React from 'react'
import plate from "../assets/img/plate.jpg"

export default function Expert() {
  return (
    <div className='max-w-[1240px]  p-2 mx-auto my-20 h-[200px] md:grid grid-cols-2'>
      <div className=' md:h-[200px] col-span-1 w-[70%]'>
        <img src={plate} alt="" className="inline" />
      </div>
      <div className=' md:h-[300px] col-span-1 flex flex-col justify-center'>
        <h1 className='font-tittle font-bold text-[#D90166] my-2'>Unleash Your Distinctive Elegance</h1>
        <p className='font-tittle my-2'>NEM Treasure's, Experience the luxury of exceptional craftsmanship, and let your unique style illuminate every moment.
        </p>
        <button className='md:w-[30%] bg-[#E75480] text-white p-2 rounded font-tittle'>Buy now</button>
      </div>
    </div>
  )
}
