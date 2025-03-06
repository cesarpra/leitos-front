/*'use client'
import api from "@/app/services/api";
import { useEffect, useState } from "react";

export default function Lista() {

  const [usuarios, setUsuarios] = useState()

  useEffect(() => {

    async function loadUsers(){

      const token = localStorage.getItem('token')
      const {
        data: { users },
      } = await api.get('/listar-usuarios', {
        
        headers: { Authorization: `Bearer ${token}`}
      })

      setUsuarios(users)
    }

    loadUsers()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">Página de Lista</h1>
      <ul>
        {usuarios && usuarios.length > 0 && usuarios.map((user) => (
          <li key={user.id}  className="border-b border-gray-300 py-2">
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}*/

const Sidebar = () => {
  return (
    <div className="w-20 h-screen bg-gray-100 flex flex-col items-center py-6">
      <div className="mb-8">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
      </div>
      <nav className="flex flex-col gap-6">
        <button className="text-blue-500 hover:text-blue-700">🏠</button>
        <button className="text-gray-500 hover:text-gray-700">📋</button>
        <button className="text-gray-500 hover:text-gray-700">📍</button>
      </nav>
    </div>
  );
};

export default Sidebar;