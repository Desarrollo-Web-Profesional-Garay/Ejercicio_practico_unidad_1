import './CounterButton.css';

/**
 * Desafío 4 — Levantar el Estado (Lifting State Up)
 *
 * Este componente hijo recibe el estado `count` y la función `onIncrement`
 * desde el componente padre a través de props.
 * Ambos botones comparten el mismo estado del padre.
 */
function CounterButton({ label, count, onIncrement }) {
    return (
        <button className="counter-btn" onClick={onIncrement}>
            <span className="counter-btn__label">{label}</span>
            <span className="counter-btn__count">{count}</span>
        </button>
    );
}

export default CounterButton;
