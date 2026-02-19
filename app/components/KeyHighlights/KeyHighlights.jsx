"use client";
import { FaAmbulance } from "react-icons/fa";
const KeyHiglights = () => {
    const highlights = [
        {
          icon: FaAmbulance,
          title: "24/7 Emergency",
          description:"Always ready to handle medical emergencies with expert care",
        },
        {
          icon: FaAmbulance,
          title: "Experts Doctors",
          description:"Our team consists of experienced dedicated to patient care",
        },
        {
          icon: FaAmbulance,
          title: "Advanced Equipment",
          description:"We use mordern technology for accurate diagnosis and treatment",
        },
    ]

    return(
      <section>
        <span>Why choose lifeline?</span>

        <div>
           <div>
            {/* map all */}
            {highlights.map((item, index) =>{
                const Icon = item.icon;
                return(
                    <div key={index}>
                        <div>
                        <Icon />
                        <p>{item.title}</p>
                        </div>
                       <p>{item.description}</p>
                   </div>
                )
            })}
           </div>
        </div>
      </section>
    )
}

export default KeyHiglights;