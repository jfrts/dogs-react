export function RenderIf({ condition, children }) {
  if (condition) {
    return children;
  } else {
    return null;
  }
}