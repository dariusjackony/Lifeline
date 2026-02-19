"use client";
import { FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";
export default function QuickCta(){
    return(
        <div className="bg-blue-800 flex flex-col text-center justify-center text-white p-1">
            <div className="text-sm">
             <p>0760 *** *** || 0793 *** ***</p>
            </div>
            <div className="flex gap-3 justify-center">
                <FaFacebook />
                <FaTwitter />
                <FaTiktok />
            </div>
        </div>
    )
}