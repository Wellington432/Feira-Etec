import "../src/app.css";
import { useState } from "react";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  async function handleCadastro() {
    try {
      const response = await fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome,
          email,
          senha
        })
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login">
      <h1>Cadastro</h1>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />



      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;