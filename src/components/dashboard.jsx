import Card from "./card";

const Dashboard = () => {
  const patients = [
    {
      name: "Francisco Cláudio Pereira Lima",
      hospital: "UPA 24h - Unidade Ásia",
      doctor: "Carlos Vasconcelos",
      time: 22,
      logo: "/upa-logo.png",
    },
    {
      name: "Alberto Ferreira de Assis",
      hospital: "Hospital Geral de Fortaleza",
      doctor: "Maria Jordinha",
      time: 60,
      logo: "/hgf-logo.png",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Pesquisar por nome do paciente"
            className="border rounded-md p-2 w-96"
          />
          <button className="bg-gray-200 p-2 rounded">🔍</button>
        </div>
      
      <div className="flex gap-6">
        {patients.map((patient, index) => (
          <Card key={index} {...patient} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
