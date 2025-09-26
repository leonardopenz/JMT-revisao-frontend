import { Route, Routes } from "react-router";
import CadastroProduto from "./pages/Produto/CadastroProduto";
import Produtos from "./pages/Produto/Listagem";

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/novo-produto" Component={CadastroProduto}></Route>
        <Route path="/produtos" Component={Produtos}></Route>
      </Routes>
    </>
  );
}

export default App;
