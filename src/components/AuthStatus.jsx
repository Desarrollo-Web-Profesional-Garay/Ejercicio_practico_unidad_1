import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './AuthStatus.css';

/**
 * Desafío 5 — Lógica Condicional
 *
 * Recibe la prop booleana `estaLogueado`.
 * Utiliza el operador ternario (? :) para renderizar
 * <LogoutButton /> si es verdadero o <LoginButton /> si es falso.
 */
function AuthStatus({ estaLogueado, onToggle }) {
    return (
        <div className="auth-status">
            <div className="auth-status__badge">
                <span className={`auth-status__dot ${estaLogueado ? 'auth-status__dot--online' : ''}`} />
                <span className="auth-status__text">
                    {estaLogueado ? 'Conectado' : 'Desconectado'}
                </span>
            </div>

            {/* Operador ternario para renderizado condicional */}
            {estaLogueado
                ? <LogoutButton onLogout={onToggle} />
                : <LoginButton onLogin={onToggle} />
            }
        </div>
    );
}

export default AuthStatus;
