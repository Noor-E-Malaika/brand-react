import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { TbBrandSketch } from "react-icons/tb";
import { GoSearch } from "react-icons/go";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-4" style={{ background: '#FFB6C1' }}>
      <div className="max-w-[1240px] py-3 items-center flex justify-between mx-auto">
        <div className="flex items-center font-title text-3xl font-bold text-[#000435]">
          <TbBrandSketch className='mr-2' />
          <span>NEM Treasure's</span>
        </div>
        <>
          {toggle ? (
            <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
          ) : (
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
          )}
        </>
        <ul className="font-title font-bold hidden md:flex text-white gap-10 items-center">
          <li className="hover:text-black">Home</li>
          <li className="hover:text-black">About</li>
          <li className="hover:text-black">Contact</li>
          <li className="hover:text-black">Collection</li>
          <li className="hover:text-black">Brand</li>
          <div className="relative flex items-center">
            <input 
              type="text" 
              className='rounded pl-3 pr-8 py-2 w-32 text-slate-900 font-title'
              placeholder='Search' 
            />
            <GoSearch className="absolute right-2 text-slate-900" />
          </div>
        </ul>
        {/* Responsive Menu */}
        <ul
          className={`font-title md:hidden w-full h-screen fixed bg-black top-[92px] ${
            toggle ? 'left-0' : 'left-[-100%]'
          } transition-left duration-300 ease-in-out text-white`}
        >
          <li className="p-5 hover:text-black">Home</li>
          <li className="p-5 hover:text-black">About</li>
          <li className="p-5 hover:text-black">Contact</li>
          <li className="p-5 hover:text-black">Collection</li>
          <li className="p-5 hover:text-black">Brand</li>
        </ul>
      </div>
    </div>
  );
}
