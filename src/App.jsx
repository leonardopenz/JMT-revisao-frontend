import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import CadastroProduto from "./pages/Produto/CadastroProduto";
import Produtos from "./pages/Produto/Listagem";
import EditarProduto from "./pages/Produto/Edicao";

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
      <Header></Header>
      <Routes>
        <Route path="/novo-produto" Component={CadastroProduto}></Route>
        <Route path="/produtos" Component={Produtos}></Route>
        <Route path="/produtos/:id/editar" Component={EditarProduto}></Route>
      </Routes>
    </>
  );
}

export default App;
