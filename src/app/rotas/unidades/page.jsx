import Sidebar from "../../../components/sidebar";
import Header from "../../../components/header";

export default function unidades() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <p>unidades</p>
      </div>
    </div>
  );
}
