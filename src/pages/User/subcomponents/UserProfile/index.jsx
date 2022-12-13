import "./styles.css";
import { useParams } from "react-router-dom";
import { Feed } from "@/components/Feed";
import { Head } from "@/components/Head";

export function UserProfile() {
  const { user } = useParams();

  return (
    <section className="container profile">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  )
}