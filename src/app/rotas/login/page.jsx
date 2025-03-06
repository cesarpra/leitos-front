"use client";

import { useRef, useState } from "react";
import api from "@/app/services/api";
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    try{
    const {data:token} = await api.post('/login', {

      email: emailRef.current.value,
      password: passwordRef.current.value,

    })

    localStorage.setItem('token', token)
     
    

  }catch(err){
    alert('Senha ou Email incorreto')
  }
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Digite seu email"
              className="border p-2 rounded w-full mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha:</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Digite sua senha"
              className="border p-2 rounded w-full mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
          onClick={() => router.push("/rotas/dashboard")}
          type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      <Link 
        href="/rotas/dashboard"
        className="text-blue-700 hover:underline md-4 block text-center">
          Ir para Cadastro
      </Link>
      </div>
    </div>
  );
}
