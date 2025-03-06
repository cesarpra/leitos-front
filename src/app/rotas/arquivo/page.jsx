import Sidebar from "../../../components/sidebar";
import Header from "../../../components/header";

export default function Arquivo() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <p>arquivo</p>
      </div>
    </div>
  );
}
