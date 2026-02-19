"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import About from "./components/About/About";
import KeyHighlights from "./components/KeyHighlights/KeyHighlights";
export default function Home(){
  const backgrounds = [
    "/bed.png",
    "/doctor.jpg",
  ]
  const [ current, setCurrent ] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + backgrounds.length) % backgrounds.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % backgrounds.length);
  };
  return(
    <div>
        <div className="relative h-[80vh] w-full overflow-hidden">
          <div
           className="absolute inset-0 bg-center bg-cover transition-all duration-700"
           style={{ backgroundImage: `url(${backgrounds[current]})`}}
          >
          </div>
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center text-center items-center text-white">
            <h2 className="font-semibold text-2xl tracking-widest">Lifeline hospital</h2>
            <p className="text-4xl lg:text-7xl font-bold mt-4">Because Every Life<br /> Matters</p>
          </div>
          <button onClick={prevSlide}
           className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 text-white rounded-full hover:bg-black/70 transition"
          >
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide}
           className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      <About />
      <KeyHighlights />
    </div>
    
    
  )
}