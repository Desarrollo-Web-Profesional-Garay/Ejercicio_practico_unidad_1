import './AuthButtons.css';

/**
 * Desafío 5 — Lógica Condicional
 *
 * Componente que se muestra cuando el usuario NO está logueado.
 */
function LoginButton({ onLogin }) {
    return (
        <button className="auth-btn auth-btn--login" onClick={onLogin}>
            🔑 Iniciar Sesión
        </button>
    );
}

export default LoginButton;
