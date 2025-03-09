import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Inter } from "next/font/google";

const niramit = Inter({ subsets: ["latin"], weight: "400" });


export default function unidades() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
      <Header title={<span className={`flex items-center ${niramit.className}`}> Usuários</span>} />
      <p>unidades</p>
      </div>
    </div>
  );
}
