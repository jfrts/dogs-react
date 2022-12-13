import "./styles.css";
import { Feed } from "@/components/Feed";
import { Head } from "@/components/Head";

export function Home() {
  return (
    <section className="container main-container">
      <Head title="Home"/>
      <Feed />
    </section>
  );
}
