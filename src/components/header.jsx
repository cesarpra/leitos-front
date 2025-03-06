import { Inter } from "next/font/google";

const niramit = Inter({ subsets: ["latin"], weight: "400" });

const Header = () => {
  return (
    <div className="w-[1285px] h-[70px] ml-[81px] flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
      <h2 className={`${niramit.className} text-[17px] font-normal leading-[22.1px] tracking-[0px]`}>
        Dashboard
      </h2>
      <div className="flex items-center gap-4">
        <span>🔔</span>
        <img src="/user.jpg" alt="Perfil" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
