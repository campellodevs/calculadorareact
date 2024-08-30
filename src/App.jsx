import Header from './components/Header';
import { useState, useEffect } from 'react';
import Resultado from './components/Resultado';

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const calcularImc = (e) => {
    e.preventDefault(); // Impede o envio do formulário
    if (altura > 0 && peso > 0) {
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2));
    } else {
      setResultado(0);
    }
  };

  useEffect(() => {
    resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false);
  }, [resultado]);

  return (
    <>
      <div className="container">
        <div className="box">
          <Header />
          <form onSubmit={calcularImc}>
            <div>
              <label htmlFor="altura">
                Altura
                <span className="span">(Ex: 1.80)</span>
                <input
                  type="number"
                  id="altura"
                  placeholder="Digite sua altura"
                  step="0.01" // Permite números decimais
                  onChange={({ target }) => setAltura(parseFloat(target.value) || 0)}
                />
              </label>
            </div>

            <div>
              <label htmlFor="peso">
                Peso
                <span className="span">(Ex: 80)</span>
                <input
                  type="number"
                  id="peso"
                  placeholder="Digite seu peso"
                  step="0.01" // Permite números decimais
                  onChange={({ target }) => setPeso(parseFloat(target.value) || 0)}
                />
              </label>
            </div>
            <button type="submit">Calcular</button>
          </form>
        </div>
        {mostrarResultado && <Resultado resultado={resultado} />}
      </div>
    </>
  );
}

export default App;
