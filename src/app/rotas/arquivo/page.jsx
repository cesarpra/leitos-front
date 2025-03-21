import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Inter } from "next/font/google";
import Dashboard from "@/components/Dashboard";

const niramit = Inter({ subsets: ["latin"], weight: "400" });


export default function Arquivo() {
  return (
       <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header title={
            <span
              className={`${niramit.className} text-[17px] font-normal leading-[22.1px] tracking-[0px]`}
            >
              Arquivos
            </span>
          } />
            <Dashboard />
          </div>
        </div>
  );
}
