import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/dashboard";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
      </div>
    </div>
  );
}