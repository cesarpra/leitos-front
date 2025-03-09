import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { FileText } from "react-feather";
import { Inter } from "next/font/google";

const niramit = Inter({ subsets: ["latin"], weight: "400" });

export default function Pacientes() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header title={<span className="flex items-center"> <FileText className="mr-2 text-[#769dbd]" /> Ficha de Paciente</span>} />
        
        {/* Informações do Paciente */}
        <div className="w-[1149px] h-[209px] bg-white rounded-lg shadow-md p-1 mx-auto mt-9 flex justify-between">
          <div className="text-left">
            <p className={`${niramit.className} text-lg font-bold w-[400px] h-[31px] size-6 ml-4 my-4`}>Nome: Francisco Cláudio Pereira Lima</p>
            <p className="text-xs font-extralight ml-4 mb-4">Data de Nascimento: 12/05/1980</p>
            <p className="text-xs font-extralight ml-4 my-4">Admissão: 05/03/2025</p>
            <p className="text-xs font-extralight ml-4 my-4">Número do Prontuário: 123456</p>
            <p className="ml-4 mb-1 pb-1">Tempo: 22h</p>
          </div>
          <img src="/logo-upa.jpg" alt="Logo" className="w-[102px] h-[73px] my-auto mr-4" />
        </div>

        <div className="w-[1149px] h-[177px] justify-between bg-white rounded-lg shadow-md p-6 mx-auto mt-[18px] flex">
          <div className="text-left flex justify-between">
            <div>
              <h2 className="text-lg font-bold">Exames:</h2>
              <p>Exame complementar</p>
              <p>Fazer</p>
              <p>Arteriografia cerebral</p>
            </div>
            <div>
              <p>Exame complementar</p>
              <p>Fazer</p>
              <p>Arteriografia cerebral</p>
            </div>
          </div>
        </div>
        
        {/* Novos blocos de informações */}
        <div className="w-[1149px] flex justify-between mx-auto mt-[18px]">
          <div className="w-[568px] h-[157px] bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-bold">Comorbidades:</p>
            <p>Data de Nascimento: 10/11/1990</p>
            
          </div>
          <div className="w-[565px] h-[157px] bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-bold">Uso de medicamentos:</p>
            <p>Data de Nascimento: 05/06/1985</p>
            
          </div>
        </div>

        <div className="w-[1149px] flex justify-between mx-auto mt-[18px]">
          <div className="w-[568px] h-[157px] bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-bold">Cirurgias:</p>
            <p>Data de Nascimento: 15/09/1978</p>
            
          </div>
          <div className="w-[565px] h-[157px] bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-bold">Histórico Familiar:</p>
            <p>Data de Nascimento: 22/03/1982</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
