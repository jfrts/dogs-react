import "./styles.css";

export function Input({ label, type, name, value, error, onChange, onBlur }) {
  return (
    <div className="input-label">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
