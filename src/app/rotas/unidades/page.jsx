"use client"
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import withPrivateRoute from "../../../components/withPrivateRoute";
import { FileText, Type, MapPin, ArrowUp, CheckCircle, ArrowRight } from "react-feather";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Link from "next/link";


const niramit = Inter({ subsets: ["latin"], weight: "400" });

const Card = ({ hospital, bairro, time, cidade, rua, telefone, onClick }) => {
  return (
    <div className="w-[359px] h-[209px] bg-white shadow-md rounded-lg p-1 relative cursor-pointer" onClick={() => onClick(hospital)}>
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h3 className="font-extralight my-4 ml-2">{hospital}</h3>
          <p className="text-xs text-gray-500 mb-4 ml-2">{`${cidade} - ${bairro}`}</p>
          <p className="text-xs text-gray-700 mb-1 ml-2">Rua: {rua}</p>
          <p className="text-xs text-gray-700 mb-1 ml-2">{telefone}</p>
        </div>
        <img src="/logo-hgf.jpg" alt="Logo-hgf.jpg" className="w-[65px] h-[65px] p-0 m-0"/>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-gray-600 p-1 ml-2">{time} min</span>
      </div>
      <Link href="/">
        <ArrowRight className="absolute bottom-4 right-4 text-blue-500 cursor-pointer" size={24} />
      </Link>
    </div>
  );
};

 function Unidades() {
  const [filtroSelecionado, setFiltroSelecionado] = useState("tipo");
  const [modalOpen, setModalOpen] = useState(false);
  const [instituicoes, setInstituicoes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState("");
  const [novaInstituicao, setNovaInstituicao] = useState({ hospital: "", cidade: "", bairro: "", rua: "", telefone: "" });

  useEffect(() => {
    const storedInstituicoes = JSON.parse(localStorage.getItem("instituicoes")) || [];
    setInstituicoes(storedInstituicoes);
  }, []);

  const handleSave = () => {
    const updatedInstituicoes = [...instituicoes, novaInstituicao];
    setInstituicoes(updatedInstituicoes);
    localStorage.setItem("instituicoes", JSON.stringify(updatedInstituicoes));
    setModalOpen(false);
    setNovaInstituicao({ hospital: "", cidade: "", bairro: "",rua: "", telefone: "" });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header title={<span className={`${niramit.className} text-[17px] font-normal leading-[22.1px] tracking-[0px]`}>Unidades</span>} />
        <div className="flex justify-center mt-6">
          <div className="flex items-center h-[87px] max-w-[1223px] w-full rounded-[15px] bg-white px-4 py-4">
            <div className="flex flex-col items-start mr-4">
              <span className="text-gray-700 font-bold text-xs mb-1">Ordenar por:</span>
              <div className="flex items-center gap-3">
                <div className="relative cursor-pointer" onClick={() => setFiltroSelecionado("tipo")}> 
                  <Type className={filtroSelecionado === "tipo" ? "text-blue-500" : "text-gray-400"} />
                  {filtroSelecionado === "tipo" && <ArrowUp className="absolute top-[-5px] right-[-5px] text-blue-500 w-3 h-3" />}
                </div>
                <div className="relative cursor-pointer" onClick={() => setFiltroSelecionado("unidade")}> 
                  <MapPin className={filtroSelecionado === "unidade" ? "text-blue-500" : "text-gray-400"} />
                  {filtroSelecionado === "unidade" && <ArrowUp className="absolute top-[-5px] right-[-5px] text-blue-500 w-3 h-3" />}
                </div>
              </div>
            </div>
            <div className="flex-grow flex justify-end gap-4">
            <input type="text" className="border border-gray-300 rounded-2xl text-sm p-2 pr-10 w-full h-[51px] text-gray-700" placeholder="Filtrar por hospital"
              value={instituicaoSelecionada} readOnly />
              <input type="text" className="border border-gray-300 rounded-2xl text-sm p-2 pr-10 w-full h-[51px]" placeholder="Pesquisar por nome" value={pesquisa} onChange={e => setPesquisa(e.target.value)} />
            </div>
            <button className="bg-[#2e76cb] h-[51px] text-white px-4 py-2 rounded flex items-center ml-4" onClick={() => setModalOpen(true)}>
              <MapPin className="mr-2 text-white" /> Adicionar instituição
            </button>
          </div>
        </div>
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">Adicionar Instituição</h2>
              <input type="text" placeholder="instituição" className="border p-2 w-full mb-2" value={novaInstituicao.hospital} onChange={e => setNovaInstituicao({ ...novaInstituicao, hospital: e.target.value })} />
              <input type="text" placeholder="Cidade" className="border p-2 w-full mb-2" value={novaInstituicao.cidade} onChange={e => setNovaInstituicao({ ...novaInstituicao, cidade: e.target.value })} />
              <input type="text" placeholder="Bairro" className="border p-2 w-full mb-2" value={novaInstituicao.bairro} onChange={e => setNovaInstituicao({ ...novaInstituicao, bairro: e.target.value })} />
              <input type="text" placeholder="Rua" className="border p-2 w-full mb-2" value={novaInstituicao.rua} onChange={e => setNovaInstituicao({ ...novaInstituicao, rua: e.target.value })} />
              <input type="text" placeholder="Telefone" className="border p-2 w-full mb-2" value={novaInstituicao.telefone} onChange={e => setNovaInstituicao({ ...novaInstituicao, telefone: e.target.value })} />
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>Salvar</button>
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-4 p-6">
          {instituicoes
          .filter(inst => inst.hospital?.toLowerCase().includes(pesquisa?.toLowerCase() || ""))
          .map((inst, index) => (
            <Card 
                key={index} 
                hospital={inst.hospital} 
                cidade={inst.cidade} 
                bairro={inst.bairro} 
                rua={inst.rua}
                time="30" 
                telefone={inst.telefone}
                logo="/logo-hgf.jpg" 
                onClick={setInstituicaoSelecionada} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withPrivateRoute(Unidades)