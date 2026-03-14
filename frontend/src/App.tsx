
import { useState } from 'react'
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">

        <div className="logo-area">
          <img
            src="https://placehold.co/80x80"
            alt="Logo"
            className="logo"
          />

          <div>
            <h1>FEIRA ETEC</h1>
            <p>Mercado virtual, sempre com produtos de qualidade da Escola Agrícola de Jales</p>
          </div>
        </div>

      </header>

      <section className="produtos">
        <div className="card">
          <h3>Alface</h3>
          <p>R$ 2,50</p>
          <button>Adicionar</button>
        </div>

        <div className="card">
          <h3>Tomate</h3>
          <p>R$ 4,00</p>
          <button>Adicionar</button>
        </div>

        <div className="card">
          <h3>Cenoura</h3>
          <p>R$ 3,00</p>
          <button>Adicionar</button>
        </div>
      </section>
    </div>
  );
}

export default App;