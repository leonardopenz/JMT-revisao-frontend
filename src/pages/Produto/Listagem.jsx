import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./CadastroProduto.css";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = () => {
    axios
      .get("http://localhost:3001/produtos")
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
          .delete(`http://localhost:3001/produtos/${id}`)
          .then(() => {
            Swal.fire("Excluído!", "O produto foi removido.", "success");
            carregarProdutos(); // Atualiza a lista após exclusão
          })
          .catch((error) => {
            Swal.fire("Erro!", "Não foi possível excluir o produto.", "error");
            console.error("Erro ao excluir:", error);
          });
      }
    });
  };

  return (
    <div className="produtos-container">
      <h2>Produtos cadastrados</h2>
      <div className="produtos-grid">
        {produtos.map((produto) => (
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
              <button className="btn-editar">Editar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
