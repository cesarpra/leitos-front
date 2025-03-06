"use client"
import { CheckCircle, ArrowRight } from "react-feather";
import Link from "next/link";
  
  const Card = ({ name, hospital, doctor, time, logo }) => {
      return (
        <div className="w-[359px] h-[209px] bg-white shadow-md rounded-lg p-1 relative">
         <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="font-extralight my-4 ml-2">{name}</h3>
            <p className="text-xs text-gray-500 mb-4 ml-2">{hospital}</p>
            <p className="text-xs text-gray-700 mb-1 ml-2">Dr(a): {doctor}</p>
          </div>
            <img src="/logo-hgf.jpg" alt="Logo-hgf.jpg" className="w-[65px] h-[65px] p-0 m-0"/>
          </div>
          <div className="flex flex-col items-start">
          <div className="flex gap-5 p-1 m-2">
              {[...Array(5)].map((_, index) => (
                <CheckCircle key={index} className="text-green-500" size={24} />
              ))}
            </div>
            <span className="text-gray-600 p-1 ml-2">{time} min</span>
          </div>
          <Link href="/rotas/pacientes">
            <ArrowRight className="absolute bottom-4 right-4 text-blue-500 cursor-pointer" size={24} />
          </Link>
        </div>
      );
  };
    
  export default Card;
  