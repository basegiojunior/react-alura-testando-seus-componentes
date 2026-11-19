import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";

export default function Formulario() {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  function adicionarParticipante(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button type="submit" disabled={!nome}>
        Adicionar
      </button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  );
}
