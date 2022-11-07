import "./styles.css";

export function Input({ label, type, name }) {
    return (
        <div className="input-label">
            <label htmlFor={ name }>{ label }</label>
            <input id={ name } name={ name } type={ type } />
            <span className="error">Erro</span>
        </div>
    )
}