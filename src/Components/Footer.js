import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <div className='bg-[#FFB6C1] mx-w-[1240px] mx-auto h-[300px]  md:grid grid-cols-4 h-[100%] gap-10'>
      <div className=' h-[300px]'>
        <h1 className='font-tittle  text-black font-bold text-2xl mt-10 mx-10'>NEM Treasure's</h1>
        <p className='font-tittle text-white  mt-2 mx-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio porro sed consectetur quos ut dolores at, 
          facilis quis perspiciatis.</p>
           <div className='mt-10 mx-12 flex space-x-4'> 
            <FaFacebookSquare  size={30} className='text-blue-900'/>
            <FaSquareInstagram size={30}  className='text-pink-700'/>
            <FaTwitterSquare   size={30} className='text-blue-600' />
            <SiGithub          size={30} className='text-black-800'/>
          </div>
      </div>

      <div className=' h-[300px]'>
        <h1 className='font-tittle  text-black font-bold text-xl mt-10 mx-12' >Solutions</h1>
        <p className='mt-2 mx-10 text-white font-tittle'>Analytics</p>
        <p className='mt-2 mx-10 text-white font-tittle'>Maketing</p>
        <p className='mt-2 mx-10 text-white font-tittle'>Commerce</p>
        <p className='mt-2 mx-10 text-white font-tittle'>Insights</p>
      </div>

      <div className=' h-[300px]'>
      <h1 className='font-tittle  text-black font-bold text-xl mt-10 mx-10' >Supports</h1>
        <p className='mt-2 mx-10 text-white font-tittle'>Pricing</p>
        <p className='mt-2 mx-10 text-white font-tittle'>Documentation</p>
        <p className='mt-2 mx-10 text-white font-tittle'>Guides</p>
        <p className='mt-2 mx-10 text-white font-tittle'>API status</p>
      </div>
      <div className=' h-[300px]'>
      <h1 className='font-tittle  text-black font-bold text-xl mt-10 mx-10' >Campany</h1>
        <p className='mt-2 mx-10 text-white font-tittle'>About</p>
        <p className='mt-2 mx-10 text-white font-tittle'>Blog</p>
        <p className='mt-2 mx-10 text-white font-tittle'>Carres</p>
        <p className='mt-2 mx-10 text-white font-tittle'>Job</p>
        <p className='mt-2 mx-10 text-white font-tittle'>Press</p>
      </div>
      </div>
  )
}

