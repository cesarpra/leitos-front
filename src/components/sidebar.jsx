"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Grid, Archive, Users, MapPin, LogOut } from "react-feather";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/rotas/dashboard", icon: Grid, key: "grid" },
    { href: "/rotas/arquivo", icon: Archive, key: "archive" },
    { href: "/rotas/usuarios", icon: Users, key: "users" },
    { href: "/rotas/unidades", icon: MapPin, key: "map" },
  ];

  return (
    <div className="flex">
      <nav className="relative flex">
        <ol className="w-20 h-[907px] bg-white shadow-md shadow-gray-500 flex flex-col items-center py-10 gap-14 pt-2">
          {/* Logo */}
          <li>
            <img src="/logo.png" alt="Logo" className="w-[43px] h-[45px] mx-5 pt-0 mb-5" />
          </li>

          {/* Menu */}
          {menuItems.map(({ href, icon: Icon, key }) => {
            const isActive = pathname === href; 
            return (
              <li key={key} className="w-full">
                {isActive && <div className="absolute left-0 h-8 w-1 bg-[#2e76cb] rounded-r-md"></div>}
                <Link href={href} className="flex justify-center">
                  <Icon size={24} color={isActive ? "#0769db" : "gray"} strokeWidth={1.2} className="cursor-pointer" />
                </Link>
              </li>
            );
          })}

          {/* Ícone de Logout na parte inferior */}
          <li className="mt-auto pb-5 w-full">
            <Link href="/rotas/login" className="flex justify-center">
              <LogOut size={24} color="red" strokeWidth={1.2} className="cursor-pointer" />
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
