import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Loja de Produtos</h1>
        <ul className="nav-links">
          <li>
            <Link to="/novo-produto">Cadastro</Link>
          </li>
          <li>
            <Link to="/produtos">Visualizar Produtos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
