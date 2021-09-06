/* eslint-disable jsx-a11y/heading-has-content */
import BarChats from "componentes/BarChats";
import DataTable from "componentes/DataTable";
import DonutChat from "componentes/DonutChat";
import Footer from "componentes/Footer";
import NavBar from "componentes/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas!</h1>
      </div>
      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
          <BarChats />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Todas as Vendas</h5>
          <DonutChat />
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        <DataTable />
      </div>

      <Footer />
    </>
  );
}

export default App;
