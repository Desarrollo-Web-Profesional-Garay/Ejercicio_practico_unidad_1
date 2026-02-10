import { useState } from 'react';
import CounterButton from './components/CounterButton';
import AuthStatus from './components/AuthStatus';
import './App.css';

/**
 * Componente padre principal.
 *
 * ── Desafío 4 (Lifting State Up) ──
 * El estado `count` vive aquí en el padre y se pasa a ambos
 * <CounterButton /> hijos a través de props.
 * La función `handleIncrement` también se pasa como prop.
 * Al presionar cualquiera de los dos botones, ambos contadores
 * se incrementan al mismo tiempo porque comparten el mismo estado.
 *
 * ── Desafío 5 (Lógica Condicional) ──
 * El estado `estaLogueado` se pasa como prop booleana al
 * componente <AuthStatus />, que utiliza el operador ternario
 * para mostrar <LoginButton /> o <LogoutButton />.
 */
function App() {
  // ── Desafío 4: Estado compartido ──
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  // ── Desafío 5: Estado de autenticación ──
  const [estaLogueado, setEstaLogueado] = useState(false);

  const toggleAuth = () => {
    setEstaLogueado((prev) => !prev);
  };

  return (
    <div className="app">
      {/* ════════════ DESAFÍO 4 ════════════ */}
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

      {/* ════════════ DESAFÍO 5 ════════════ */}
      <section className="card">
        <h2 className="card__title">Desafío 5 — Lógica Condicional</h2>
        <p className="card__description">
          El componente <code>AuthStatus</code> recibe la prop booleana{' '}
          <code>estaLogueado</code> y utiliza el operador ternario{' '}
          <code>? :</code> para mostrar <code>&lt;LoginButton /&gt;</code> o{' '}
          <code>&lt;LogoutButton /&gt;</code>.
        </p>

        {/* Se pasa la prop booleana estaLogueado */}
        <AuthStatus estaLogueado={estaLogueado} onToggle={toggleAuth} />
      </section>
    </div>
  );
}

export default App;
