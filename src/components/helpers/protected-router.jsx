import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "@/context/user-context"

export function ProtectedRouter({ children }) {
	const { login } = useContext(UserContext);
	return login ? children : <Navigate to="/login" />
}