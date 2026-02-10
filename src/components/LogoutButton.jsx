import './AuthButtons.css';

/**
 * Desafío 5 — Lógica Condicional
 *
 * Componente que se muestra cuando el usuario SÍ está logueado.
 */
function LogoutButton({ onLogout }) {
    return (
        <button className="auth-btn auth-btn--logout" onClick={onLogout}>
            🚪 Cerrar Sesión
        </button>
    );
}

export default LogoutButton;
