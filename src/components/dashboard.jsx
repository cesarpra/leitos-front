"use client";
import { useState } from "react";
import { CheckCircle, Clock, MapPin, Type, Search } from "react-feather";
import Card from "./card";

const Dashboard = () => {
  const patients = [
    {
      name: "Francisco Cláudio Pereira Lima",
      hospital: "UPA 24h - Unidade Ásia",
      doctor: "Carlos Vasconcelos",
      time: 22,
      logo: "/logo.png",
      status: "checked",
    },
    {
      name: "Alberto Ferreira de Assis",
      hospital: "Hospital Geral de Fortaleza",
      doctor: "Cesar Jordinha",
      time: 60,
      logo: "/logo.png",
      status: "clock",
    },
  ];

  const [sortOption, setSortOption] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  const sortPatients = (option) => {
    setSortOption(option);
  };

  const sortedPatients = [...patients].sort((a, b) => {
    if (sortOption === "name") return a.name.localeCompare(b.name);
    if (sortOption === "time") return a.time - b.time;
    if (sortOption === "hospital") return a.hospital.localeCompare(b.hospital);
    if (sortOption === "checked") return a.status.localeCompare(b.status);
    return 0;
  });

  const searchedPatients = sortedPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[907px] p-6 bg-gray-100">
      <div className="w-[1223px] rounded-[15px] bg-white px-4 py-4">
        {/* ordenar */}
        <span className="text-gray-700 font-bold text-xs block mb-2">Ordenar por:</span>
        
        <div className="flex items-center gap-4">
          {/* Ícones */}
          <div className="flex gap-5 items-center">
            <button onClick={() => sortPatients("name")}> 
              <CheckCircle className={`cursor-pointer ${sortOption === "name" ? "text-blue-500" : "text-gray-500"}`} />
            </button>
            <button onClick={() => sortPatients("time")}> 
              <Clock className={`cursor-pointer ${sortOption === "time" ? "text-blue-500" : "text-gray-500"}`} />
            </button>
            <button onClick={() => sortPatients("hospital")}> 
              <MapPin className={`cursor-pointer ${sortOption === "hospital" ? "text-blue-500" : "text-gray-500"}`} />
            </button>
            <button onClick={() => sortPatients("checked")}> 
              <Type className={`cursor-pointer ${sortOption === "checked" ? "text-blue-500" : "text-gray-500"}`} />
            </button>
          </div>

          {/* Input de pesquisa */}
          <div className="flex gap-4 w-full">
            <div className="relative w-[487px]">
            <input
                type="text"
                value={
                  sortOption === "name" ? "Nome" :
                  sortOption === "time" ? "Tempo" :
                  sortOption === "hospital" ? "Hospital" :
                  "Finalizados"
                }
                readOnly
                className="border-[1px] border-gray-300 rounded-2xl p-2 pr-10 w-full h-[51px] text-center"
              />
              <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
            </div>
            
            <div className="relative w-[487px]">
              <input
                type="text"
                placeholder="Pesquisar por nome do paciente"
                className="border-[1px] border-gray-300 text-sm rounded-2xl p-2 pr-10 w-full h-[51px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-4">
        {searchedPatients.map((patient, index) => (
          <Card key={index} {...patient} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
