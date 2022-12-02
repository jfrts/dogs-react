import { Route, Routes } from "react-router-dom";
import { UserHeader } from "./subcomponents/UserHeader";
import { UserPhotoPost } from "./subcomponents/UserPhotoPost";
import { UserStats } from "./subcomponents/UserStats";
import { Feed } from "@/components/Feed";

export function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  )
}