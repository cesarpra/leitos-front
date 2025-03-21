import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Login from './rotas/login/page.jsx';

export default function Home() {
  return (
    <div>
      <Login/>
    </div>
    /*<div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>*/
  );
}
