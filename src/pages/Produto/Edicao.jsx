import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./CadastroProduto.css";

export default function EditarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/produtos/${id}`)
      .then((response) => {
        const produto = response.data;
        setNome(produto.nome);
        setPreco(produto.preco);
        setDescricao(produto.descricao);
        setImagem(produto.imagem);
      })
      .catch((error) => {
        console.error("Erro ao carregar produto:", error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const produtoAtualizado = { nome, preco, descricao, imagem };

    try {
      await axios.put(`http://localhost:3001/produtos/${id}`, produtoAtualizado);
      Swal.fire({
        title: "Produto alterado",
        text: "Produto alterado com sucesso",
        icon: "success",
      });
      navigate("/produtos"); // volta para a listagem
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert("Erro ao atualizar produto!");
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Editar Produto</h2>
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
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}
