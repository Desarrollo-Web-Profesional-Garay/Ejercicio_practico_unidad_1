import { useState } from 'react';
import CounterButton from './components/CounterButton';
import './App.css';

/**
 * Desafío 4 — Levantar el Estado (Lifting State Up)
 *
 * El estado `count` vive aquí en el componente padre (App),
 * que es el componente padre común más cercano de ambos botones.
 * Se pasa el valor del estado y la función `handleIncrement`
 * a cada hijo <CounterButton /> a través de props.
 * Al presionar cualquiera de los dos botones,
 * ambos contadores se incrementan al mismo tiempo.
 */
function App() {
  // Estado compartido — vive en el padre
  const [count, setCount] = useState(0);

  // Función para actualizar el estado
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="app">
      <section className="card">
        <h2 className="card__title">Desafío 4 — Levantar el Estado</h2>
        <p className="card__description">
          Ambos botones comparten el mismo estado <code>count</code> que vive en
          el componente padre. Al presionar cualquiera de ellos, los dos se
          actualizan simultáneamente.
        </p>

        <div className="card__buttons">
          {/* Se pasa el estado y la función al hijo vía props */}
          <CounterButton
            label="Botón A"
            count={count}
            onIncrement={handleIncrement}
          />
          <CounterButton
            label="Botón B"
            count={count}
            onIncrement={handleIncrement}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
