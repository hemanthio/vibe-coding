'use client'

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from 'motion/react'

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Lester Walsh",
    company: "Professional rider",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    testimonial: "I am very happy with the bike. It's not only a lightweight bike which can be ridden after the battery dies if needed, but a fast bike due to its geometry and rider position. As a road biker who usually rides over 30kmh in the flats,."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Cycling Enthusiast",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    testimonial: "This e-bike has completely transformed my daily commute. The battery life is exceptional, lasting me the entire week with daily 15km rides. The build quality is outstanding and the customer service team is incredibly responsive."
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Urban Commuter",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    testimonial: "Perfect balance of power and efficiency. The motor is whisper quiet and the integration with the frame is seamless. I've been riding for 6 months now and couldn't be happier with my purchase."
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    company: "Weekend Warrior",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    testimonial: "Incredible performance on both city streets and mountain trails. The versatility of this bike is unmatched. Whether I'm commuting to work or exploring new trails, it handles everything with ease."
  },
  {
    id: 5,
    name: "David Kim",
    company: "Tech Professional",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    testimonial: "As someone who values both technology and sustainability, this e-bike hits all the right notes. The smart features and eco-friendly design make it the perfect choice for modern urban living."
  }
]

const Testimonialsection =() =>{

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval (()=>{
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    },3000)

    return () => clearInterval(interval)
  })

return (
  <>
<div className="h-screen flex flex-col items-center justify-center bg-white px-4">

<AnimatePresence mode="wait">
  <motion.div 
 
   className="max-w-2xl text-center mb-8">
    <motion.p 
   key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
     className="text-lg font-[400] text-gray-800 tracking-tight  ">{testimonials[currentIndex].testimonial}</motion.p>
  </motion.div>
</AnimatePresence>


  <div className="flex items-center justify-center gap-4">
    {testimonials.map((item, index) =>
      index === currentIndex ? (
        <div
          key={item.id}
          className="flex items-center bg-gray-100 text-white px-4 py-2 rounded-full gap-2"
        >
          <img
            src={item.photo}
            alt={item.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm">
            <h3 className="font-semibold text-black/90">{item.name}</h3>
            <h4 className="text-gray-600">{item.company}</h4>
          </div>
        </div>
      ) : (
        <img
          key={item.id}
          src={item.photo}
          alt={item.name}
          className="w-8 h-8 rounded-full object-cover "
        />
      )
    )}
  </div>
</div>


  </>
)
}

export default Testimonialsection

