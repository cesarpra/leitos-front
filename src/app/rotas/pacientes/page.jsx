"use client";
import { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { FileText, CheckCircle, AlertCircle, FileText as PdfIcon } from "react-feather";
import { Inter } from "next/font/google";

const niramit = Inter({ subsets: ["latin"], weight: "400" });

export default function Pacientes() {
  const [exames, setExames] = useState([]);

  useEffect(() => {
    const storedExames = localStorage.getItem("exames");
    if (storedExames) {
      setExames(JSON.parse(storedExames));
    } else {
      const defaultExames = [
        { id: 1, nome: "Exame complementar", feito: false },
        { id: 2, nome: "Fazer", feito: false },
        { id: 3, nome: "Arteriografia cerebral", feito: false },
        { id: 4, nome: "Hemograma completo", feito: false },
        { id: 5, nome: "Eletrocardiograma", feito: false },
        { id: 6, nome: "Tomografia computadorizada", feito: false },
      ];
      setExames(defaultExames);
      localStorage.setItem("exames", JSON.stringify(defaultExames));
    }
  }, []);

  const toggleFeito = (id) => {
    const updatedExames = exames.map((exame) =>
      exame.id === id ? { ...exame, feito: !exame.feito } : exame
    );
    setExames(updatedExames);
    localStorage.setItem("exames", JSON.stringify(updatedExames));
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header
          title={
            <span className="flex items-center">
              <FileText className="mr-2 text-[#769dbd]" /> Ficha de Paciente
            </span>
          }
        />

        {/* Informações do Paciente */}
        <div className="w-[1149px] h-[209px] bg-white rounded-lg shadow-md p-1 mx-auto mt-9 flex justify-between">
          <div className="text-left">
            <p className={`${niramit.className} text-lg font-bold w-[400px] h-[31px] size-6 ml-4 my-4`}>
              Nome: Francisco Cláudio Pereira Lima
            </p>
            <p className="text-xs font-extralight ml-4 mb-4">Data de Nascimento: 12/05/1980</p>
            <p className="text-xs font-extralight ml-4 my-4">Admissão: 05/03/2025</p>
            <p className="text-xs font-extralight ml-4 my-4">Número do Prontuário: 123456</p>
            <p className="ml-4 mb-1 pb-1">Tempo: 22h</p>
          </div>
          <img src="/logo-upa.jpg" alt="Logo" className="w-[102px] h-[73px] my-auto mr-4" />
        </div>

        {/* Lista de exames */}
        <div className="w-[1149px] bg-white rounded-lg shadow-md p-6 mx-auto mt-[18px] flex justify-between items-center">
          <div className="grid grid-cols-2 gap-1 w-3/4">
            <h2 className="text-lg font-bold col-span-2">Exames:</h2>
            {exames.map((exame) => (
              <div
                key={exame.id}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                onClick={() => toggleFeito(exame.id)}
              >
                {exame.feito ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <AlertCircle className="text-yellow-500" />
                )}
                <p>{exame.nome}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 w-1/4 items-end pr-4">
            <PdfIcon className="text-gray-400 cursor-pointer" size={36} />
            <PdfIcon className="text-gray-400 cursor-pointer" size={36} />
          </div>
        </div>

        <div className="w-[1149px] flex justify-between mx-auto mt-[18px]">
          <div className="w-[568px] h-[157px] bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-bold">Comorbidades:</p>
            <p>Hipertensão, Diabetes</p>
          </div>
          <div className="w-[565px] h-[157px] bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-bold">Uso de medicamentos:</p>
            <p>Insulina, Losartana</p>
          </div>
        </div>

        <div className="w-[1149px] flex justify-between mx-auto mt-[18px]">
          <div className="w-[568px] h-[157px] bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-bold">Cirurgias:</p>
            <p>Cirurgia cardíaca em 2015</p>
          </div>
          <div className="w-[565px] h-[157px] bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-bold">Histórico Familiar:</p>
            <p>Histórico de AVC na família</p>
          </div>
        </div>
      </div>
    </div>
  );
}
