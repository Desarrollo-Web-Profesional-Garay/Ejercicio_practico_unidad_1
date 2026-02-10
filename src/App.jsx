import { useState } from 'react';
import AuthStatus from './components/AuthStatus';
import './App.css';

/**
 * Desafío 5 — Lógica Condicional
 *
 * El estado `estaLogueado` se pasa como prop booleana al
 * componente <AuthStatus />, que utiliza el operador ternario
 * para mostrar <LoginButton /> o <LogoutButton />.
 */
function App() {
  // Estado de autenticación
  const [estaLogueado, setEstaLogueado] = useState(false);

  const toggleAuth = () => {
    setEstaLogueado((prev) => !prev);
  };

  return (
    <div className="app">
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
