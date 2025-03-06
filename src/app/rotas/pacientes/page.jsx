import Sidebar from "../../../components/sidebar";
import Header from "../../../components/header";
import Dashboard from "../../../components/dashboard";

export default function Pacientes() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <h1>pacientes</h1>
      </div>
    </div>
  );
}
