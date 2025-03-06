"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation"; 
import api from "../../services/api";
import Link from "next/link";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    try{
    await api.post('/cadastro', {

      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,

    })
    alert('Usuário cadastrado')

  }catch(err){
    alert('Erro ao cadastrar usuário')
  }
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Cadastro</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <div>
            <label className="block text-sm font-medium text-gray-700">nome:</label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Digite seu nome"
              className="border p-2 rounded w-full mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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

          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Cadastrar
          </button>
        </form>
        <Link 
        href="/rotas/login"
        className="text-blue-700 hover:underline md-4 block text-center">
          Ir para Login
      </Link>
      </div>
    </div>
  );
}
