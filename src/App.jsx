import { Route, Routes } from "react-router";
import CadastroProduto from "./pages/Produto/CadastroProduto";

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
      </Routes>
    </>
  );
}

export default App;
