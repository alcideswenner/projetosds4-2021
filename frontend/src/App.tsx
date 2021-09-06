import DataTable from "componentes/DataTable";
import Footer from "componentes/Footer";
import NavBar from "componentes/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá, mundo!</h1>
      </div>
      <DataTable />
      <Footer />
    </>
  );
}

export default App;
