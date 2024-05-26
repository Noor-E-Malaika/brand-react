import React from 'react'
import necklace from "../assets/img/necklace.jpg"
import pink  from "../assets/img/pink.jpg"
import pearl from "../assets/img/pearl.jpg"


export default function Cards() {
  return (
    <div className='py-[100px] pt-2  '>
        <div className="max-w-[1240px]  mx-auto md:grid grid-cols-3 gap-10">
            <div className=' shadow-xl h-[520px] bg-slate-100  my-8 hover:scale-105 duratio-500 '> 
                <img src= {necklace} alt="" className='w-[100%]' />
               <h1 className='font-tittle px-4 mt-5 font-bold text-[#444a4e]'>Silver grey Pearl necklace with earings set.</h1>
               <p className='px-4 text-[#444a4e] font-tittle font-bold'>$49.</p>
               <button className='  font-tittle mx-4  mt-2 w-[30%] bg-black text-[white] p-2  rounded'>Buy now</button>
            </div>

            <div className=' shadow-xl h-[520px] bg-slate-100 my-8 hover:scale-105 duratio-500  '>
              <img src={pink} alt=""/> 
              <h1 className='font-tittle  px-4 mt-5 font-bold text-[#444a4e]'>Blush pink with silver diamond set.</h1>
              <p className='px-4 text-[#444a4e] font-tittle font-bold'>$49.</p>
               <button className='  font-tittle mx-4  mt-2 w-[30%] bg-black text-[white] p-2  rounded'>Buy now</button>
            </div>

            <div className=' shadow-xl h-[520px] bg-slate-100 my-8 hover:scale-105 duratio-500 '>
              <img src={pearl} alt=""/>
              <h1 className='font-tittle px-4 mt-5 font-bold text-[#444a4e]'>Pink and white beeds necklace</h1>
               <p className='px-4 text-[#444a4e] font-tittle font-bold'>$49.</p>
                <button className='  font-tittle mx-4  mt-2 w-[30%] bg-black text-[white] p-2  rounded'>Buy now</button>
              </div>

        </div>

    </div>
  )
}
