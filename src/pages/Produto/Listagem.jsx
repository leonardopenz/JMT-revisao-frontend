import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CadastroProduto.css";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

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
              <button className="btn-deletar">Deletar</button>
              <button className="btn-editar">Editar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
