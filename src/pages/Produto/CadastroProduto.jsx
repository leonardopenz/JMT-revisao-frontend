import React, { useState } from "react";
import "./CadastroProduto.css"; // Import do CSS

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const produto = { nome, preco, descricao, imagem };
    console.log("Produto cadastrado:", produto);

    // Aqui você poderia enviar para API com axios/fetch

    // Limpar os campos
    setNome("");
    setPreco("");
    setDescricao("");
    setImagem("");
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome do Produto:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Preço do Produto:</label>
          <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Descrição:</label>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} rows="4"></textarea>
        </div>

        <div className="form-group">
          <label>URL da Imagem:</label>
          <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} />
        </div>

        <button type="submit" className="btn-cadastrar">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
