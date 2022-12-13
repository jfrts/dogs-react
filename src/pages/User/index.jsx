import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "@/context/user-context";
import { Feed } from "@/components/Feed";
import { UserHeader } from "./subcomponents/UserHeader";
import { UserStats } from "./subcomponents/UserStats";
import { UserPhotoPost } from "./subcomponents/UserPhotoPost";
import { Page404 } from "@/components/Page404";

export function User() {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </section>
  )
}