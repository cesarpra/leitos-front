import { useState, useEffect } from "react";
import api from "../app/services/api";

function Users() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await api.get("/listar-usuarios");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        alert("Erro ao carregar usuários. Verifique sua conexão com o servidor.");
      }
    };
    fetchUsuarios();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Usuários Cadastrados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {usuarios.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
