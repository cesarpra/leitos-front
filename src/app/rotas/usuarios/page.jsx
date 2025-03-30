"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import withPrivateRoute from "../../../components/withPrivateRoute";
import { MapPin, Type, UserPlus } from "react-feather";
import api from "../../services/api";

function Usuarios() {
  const [modalOpen, setModalOpen] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Usuário não autenticado!");
  
        const response = await api.get("/listar-usuarios", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        console.log("Resposta da API:", response.data); 
  
        if (Array.isArray(response.data.users)) {
          setUsuarios(response.data.users);
        } else {
          console.error("Resposta inesperada da API:", response.data);
          setUsuarios([]);
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error.response ? error.response.data : error.message);
        setUsuarios([]);
      }
    };
  
    fetchUsuarios();
  }, []);  
  
  
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await api.post("/cadastro", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Usuário cadastrado com sucesso!");
      setModalOpen(false);

      const response = await api.get("/listar-usuarios");
      setUsuarios(response.data);
    } catch (err) {
      alert("Erro ao cadastrar usuário");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header title={<span className="text-[17px] font-normal">Usuários</span>} />
        
        <div className="flex justify-center mt-6">
          <div className="flex items-center h-[87px] max-w-[1223px] w-full rounded-[15px] bg-white px-4 py-4">
            <div className="flex flex-col items-start mr-4">
              <span className="text-gray-700 font-bold text-xs mb-1">Ordenar por:</span>
              <div className="flex items-center gap-3">
                <div className="relative cursor-pointer">
                  <Type className="text-gray-400" />
                </div>
                <div className="relative cursor-pointer">
                  <MapPin className="text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex-grow flex justify-end gap-4">
              <input type="text" className="border border-gray-300 rounded-2xl text-sm p-2 pr-10 w-full h-[51px]" placeholder="Pesquisar por nome" value={pesquisa} onChange={e => setPesquisa(e.target.value)} />
            </div>
            <button className="bg-[#2e76cb] h-[51px] text-white px-4 py-2 rounded flex items-center ml-4" onClick={() => setModalOpen(true)}>
              <UserPlus className="mr-2 text-white" /> Adicionar usuário
            </button>
          </div>
        </div>

    {/* Lista de Usuários */}

  <div className="max-w-[1223px] w-full bg-[#f3f4f6] p-4 mx-auto">
    <h2 className="text-lg font-semibold mb-4"></h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {(usuarios || [])
        .filter(user => user?.name?.toLowerCase().includes(pesquisa.toLowerCase()))
        .map(user => {

          const initials = user.name
            .split(" ") 
            .map(word => word[0])
            .join("")

          return (
            <div key={user.id} className="w-[359px] h-[154px] bg-white shadow-md rounded-lg p-1 relative">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h3 className="font-extralight my-4 ml-2">{user.name}</h3>
                  <p className="text-xs text-gray-500 mb-4 ml-2">{user.email}</p>
                </div>

                <div className="w-[65px] h-[65px] flex items-center justify-center bg-[#2e76cb] text-black font-bold text-lg rounded-full">
                  {initials}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  </div>

        {/* Modal de Cadastro */}
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 relative">
              <button onClick={() => setModalOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">✖</button>
              <h2 className="text-2xl font-bold mb-4 text-center">Cadastro</h2>
              <form onSubmit={handleSave} className="flex flex-col space-y-3">
                <input ref={nameRef} type="text" placeholder="Nome" className="border p-2 w-full mb-2" required />
                <input ref={emailRef} type="email" placeholder="Email" className="border p-2 w-full mb-2" required />
                <input ref={passwordRef} type="password" placeholder="Senha" className="border p-2 w-full mb-2" required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cadastrar</button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default withPrivateRoute(Usuarios);
