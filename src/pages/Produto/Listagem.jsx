import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./CadastroProduto.css";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const navigate = useNavigate();

  const carregarProdutos = () => {
    axios
      .get("http://localhost:3000/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const deletarProduto = (id) => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Deseja realmente excluir este produto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/produtos/${id}`)
          .then(() => {
            Swal.fire("Excluído!", "O produto foi removido.", "success");
            carregarProdutos();
          })
          .catch((error) => {
            Swal.fire("Erro!", "Não foi possível excluir o produto.", "error");
            console.error("Erro ao excluir:", error);
          });
      }
    });
  };

  const editarProduto = (id) => {
    navigate(`/produtos/${id}/editar`);
  };

  // Filtrar produtos pelo nome
  const produtosFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <div className="produtos-container">
      <h2>Produtos cadastrados</h2>

      {/* Campo de pesquisa */}
      <div className="pesquisa-container">
        <input type="text" placeholder="Pesquisar produto..." value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      </div>

      <div className="produtos-grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <div className="produto-card" key={produto.id}>
              <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
              <h3>
                {produto.nome} - R$ {parseFloat(produto.preco).toFixed(2)}
              </h3>
              <p>{produto.descricao}</p>
              <div className="botoes">
                <button className="btn-deletar" onClick={() => deletarProduto(produto.id)}>
                  Deletar
                </button>
                <button className="btn-editar" onClick={() => editarProduto(produto.id)}>
                  Editar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="nenhum-produto">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}
