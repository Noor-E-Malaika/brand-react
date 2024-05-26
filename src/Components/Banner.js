import React from 'react';
/*import {ReactTyped } from 'react-typed';*/
import background from '../assets/img/background.jpg';

export default function Banner() {
  return (

    <div className="bg-[#FFB6C1] w-full py-[100px]">
        
        <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
            <div className='font-title text-xl md:text-4xl text-white'>
                Adorn yourself in splendour
            </div>

            <p className='font-title text-white text-20px md:text-5xl md:p-[20px] mt-6'>
                Elevant your elegance with exclusive jewelry 
            </p>

            <div className='font-title text-[20px] md:text-5xl md:p-[24px] text-white'>
               By NEM Treasure's
               {/*<ReactTyped
                   className='pl-3' 
                   strings={["necklaces", "earrings", "bracelets"]}
                   typeSpeed={100} 
                   loop={true}
                   backSpeed={50}
  />*/}
              
            </div>
            <button className=' mt-4 w-[10%] bg-[#E6E6FA] text-black p-2 rounded'>Shop now</button>
        </div>
    </div>
  );
}
