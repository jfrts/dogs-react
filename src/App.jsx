import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "@/context/user-context";
import { ProtectedRouter } from "./components/helpers/protected-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { User } from "./pages/User";
import { UserProfile } from "./pages/User/subcomponents/UserProfile";
import { Photo } from "./components/Photo";

import "./global.css";

export function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<ProtectedRouter><User /></ProtectedRouter>} />
          <Route path="perfil/:user" element={<UserProfile />} />
          <Route path="foto/:id" element={<Photo />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
