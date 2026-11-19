import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from "./paginas/Configuracao";
import Sorteio from "./paginas/Sorteio";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <main className="app">
          <header className="app-header">
            <h1>Amigo secreto</h1>
            <p>Adicione pelo menos 3 participantes para começar a brincadeira.</p>
          </header>
          <Routes>
            <Route path="/" element={<Configuracao />} />
            <Route path="/sorteio" element={<Sorteio />} />
          </Routes>
        </main>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
