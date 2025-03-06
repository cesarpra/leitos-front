"use client"
import { useState } from "react";
import Link from "next/link";
import { Grid, Archive, Users, MapPin } from "react-feather";

export default function Sidebar() {
  const [active, setActive] = useState("grid");

  return (
    <div className="flex">
      <nav className="relative flex">
        <ol className="w-20 h-[907px] bg-white shadow-md shadow-gray-500 flex flex-col items-center py-10 mt-0 pt-1 gap-14">
          <li>
            <img src="/logo.png" alt="Logo" className="w-[43px] h-[45px] mx-5 pt-1 mb-5 top-[13px] left-[19]"/>
          </li>
          <li onClick={() => setActive("grid")} className="w-full">
            {active === "grid" && <div className="absolute left-0 h-8 w-1 bg-[#2e76cb] rounded-r-md"></div>}
            <Link href="/rotas/dashboard" className="flex justify-center">
              <Grid size={24} color="#0769db" strokeWidth={1.2} className="mx-7 left-[28px] top-[116px] cursor-pointer"/>
            </Link>
          </li>
          <li onClick={() => setActive("archive")} className="w-full">
            {active === "archive" && <div className="absolute left-0 h-7 w-1 bg-[#2e76cb] rounded-r-md"></div>}
            <Link href="/rotas/arquivo" className="flex justify-center">
              <Archive size={24} color="#0769db" strokeWidth={1.2} className="mx-7 left-[28px] top-[214px] cursor-pointer"/>
            </Link>
          </li>
          <li onClick={() => setActive("users")} className="w-full">
            {active === "users" && <div className="absolute left-0 h-7 w-1 bg-[#2e76cb] rounded-r-md"></div>}
            <Link href="/rotas/usuarios" className="flex justify-center">
              <Users size={24} color="#0769db" strokeWidth={1.2} className="mx-7 left-[28px] top-[312px] cursor-pointer"/>
            </Link>
          </li>
          <li onClick={() => setActive("map")} className="w-full">
            {active === "map" && <div className="absolute left-0 h-7 w-1 bg-[#2e76cb] rounded-r-md"></div>}
            <Link href="/rotas/unidades" className="flex justify-center">
              <MapPin size={24} color="#0769db" strokeWidth={1.2} className="mx-7 left-[28px] top-[410px] cursor-pointer"/>
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
