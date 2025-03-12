import { useState } from "react";

export default function User() {
  const [nome, setNome] = useState("meu_usuario");

  function alterarNome() {
    const novoNome = prompt("Digite um novo nome:");
    if (novoNome) {
      setNome(novoNome);
    }
  }

  return (
    <div className="user">
      <p>{nome} <span onClick={alterarNome}>✏️</span></p>
    </div>
  );
}
