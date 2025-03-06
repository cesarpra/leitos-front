import { Inter } from "next/font/google";

const niramit = Inter({ subsets: ["latin"], weight: "400" });

const Header = () => {
  return (
    <div className="w-[1285px] h-[70px] flex justify-between items-center p-4 bg-white">
      <h2 className={`${niramit.className} text-[17px] font-normal leading-[22.1px] tracking-[0px]`}>
        Dashboard
      </h2>
      <div className="flex items-center gap-4">
        <span>Sandro</span>
        <img src="/perfil.jpg" alt="Perfil" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
