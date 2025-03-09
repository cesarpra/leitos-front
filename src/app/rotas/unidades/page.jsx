import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { FileText, Type, MapPin, ArrowUp } from "react-feather";
import { Inter } from "next/font/google";

const niramit = Inter({ subsets: ["latin"], weight: "400" });

export default function Pacientes() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header title={<span className="flex items-center"> <FileText className="mr-2 text-[#769dbd]" /> Ficha de Paciente</span>} />
        
        
          <div className="text-left">
            <div className="flex w-[1223px] rounded-[15px] bg-white px-4 py-4 mt-6">
            <span className="text-gray-700 font-bold text-xs block mb-2">Ordenar por:</span>
              <div className="flex items-center">
                <Type className="mr-2 text-gray-500" />
                <MapPin className="mr-2 text-gray-500 relative" />
                <ArrowUp className="absolute right-0 top-[-10px] text-green-500" />
              </div>
              <input type="text" className="border-[1px] border-gray-300 rounded-2xl p-2 pr-10 relative w-[487px] h-[51px] text-center" placeholder="Unidade selecionada" />
              <button className="flex text-centerml-4 bg-blue-800 text-white px-4 py-2 rounded"><MapPin className="mr-2 text-white relative" />Adicionar Unidade</button>
            </div>
          </div>
      </div>
    </div>
  );
}
