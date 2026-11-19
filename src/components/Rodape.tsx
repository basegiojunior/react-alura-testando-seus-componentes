import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../state/hooks/useSorteador";

export default function Rodape() {
  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();

  const sortear = useSorteador();

  function iniciar() {
    sortear();
    navegarPara("/sorteio");
  }

  return (
    <footer>
      <button onClick={iniciar} disabled={participantes.length < 3}>
        Iniciar brincadeira
      </button>
    </footer>
  );
}
