
const About = () => {
    return(
       <div className="-mt-10 z-10  relative px-4 ">
          <div className="flex justify-center flex-col-reverse backdrop-blur-xl rounded-2xl px-3 max-w-6xl max-auto">
            <div className="px-2 mt-2">
               <span className="mt-2 text-2xl font-semibold tracking-widest">LIFELINE HOSPITAL</span>
               <p className="max-w-[600px] text-gray-700 mt-4 leading-relaxed">
                 Lifeline hospital is a mordern healthcare facility committed to delivering 
                 compassionate, reliable, and high-quality medical services across Uganda. We 
                 combine skilled professionals, advanced medical technology, and patient-centered 
                 care to ensure every life we touch receives the attenion and dignity it deserves.
                </p>
                <p className="text-blue-600 mt-3">Read More</p>
            </div>
            <div className="mt-2">
               <img src="/Home-About.png" className="w-100" />
            </div>
          </div>
       </div>
    )
}
export default About;