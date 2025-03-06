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

import Sidebar from "../../../components/sidebar";
import Header from "../../../components/header";
import Dashboard from "../../../components/dashboard";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
