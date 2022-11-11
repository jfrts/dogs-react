import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, GET_USER } from "@/api";
import { useEffect } from "react";

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(function () {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error("Invalid token.");
          }
          await getUser(token);
          navigate("/conta");
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const userData = await response.json();
    setData(userData);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Error: invalid data");
      }
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }

  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, login, loading, error }}>
      {children}
    </UserContext.Provider>
  )
}