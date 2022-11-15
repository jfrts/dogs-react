import "./styles.css";

export function Error({ errorMessage }) {
  if (!errorMessage) {
    return null;
  }

  return (
    <p className="errorMessage">{errorMessage}</p>
  )
}