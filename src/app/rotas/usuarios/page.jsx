import Sidebar from "../../../components/sidebar";
import Header from "../../../components/header";

export default function Usuarios() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <p>users</p>
      </div>
    </div>
  );
}
