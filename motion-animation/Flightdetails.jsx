"use client";

import React from 'react';
import {motion} from "motion/react"

const FlightCard = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className='relative w-[410px] h-[350px] flex justify-center rounded-[28px] overflow-hidden group'>
        <motion.img 
          initial ={{height:"calc(53%)"}}
          whileHover={{height:"100%"}}
          transition={{duration:0.7, ease:"easeInOut"}}
          src="https://i.pinimg.com/736x/63/e4/52/63e452f0d98b446fd9554aeb79954481.jpg" 
          alt="" 
          className='w-full   rounded-[28px] group-hover:rounded-[28px]   object-cover '
        />
        <div className="absolute top-1 pointer-events-none bg-white rounded-3xl shadow-lg">
          {/* Journey Details Card */}
          <div className="p-6 w-[400px]">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Y6K6yIRqkUlWj6vU91UVW2GUEzRQCyQxtg&s" alt="" className='w-8 h-8' />
              <span className="text-black tracking-tighter text-base font-semibold">Emirates Airline</span>
            </div>
                     
            {/* Flight Route */}
            <div className="flex items-center justify-between mb-2">
              <div className="text-left">
                <div className="text-sm text-black/40 tracking-tight font-semibold">Departure</div>
                <div className="text-sm font-semibold tracking-tight text-black">9:25AM, Cracow</div>
              </div>
              <div className="text-center px-2 py-1 rounded-full bg-green-100">
                <div className="text-xs text-green-500 font-medium">Left 2h 13m</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-black/40 tracking-tight font-semibold">Arrival</div>
                <div className="text-sm font-semibold tracking-tight text-black">1:30PM, Barcelona</div>
              </div>
            </div>
                     
            {/* Airport Codes */}
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-900">KRK</div>
              <div className="flex-1 mx-4 relative">
                <div className="h-1 bg-gray-300 rounded-full relative">
                  <div className="absolute right-0 bottom-0 w-12 h-1 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">BCN</div>
            </div>
          </div>
        </div>
      </div>                
    </div>
  );
};

export default FlightCard;