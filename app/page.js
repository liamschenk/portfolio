import { client } from "./sanity/client";
import { projectQuery, aboutQuery } from "./sanity/queries";

import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

import styles from "./styles/page.module.css";

export default async function Page() {
  const fetchOptions = { next: { revalidate: 3600 } };

  const [{ projects }, about] = await Promise.all([
    client.fetch(projectQuery, {}, fetchOptions),
    client.fetch(aboutQuery, {}, fetchOptions),
  ]);

  return (
    <div className={styles["page-wrapper"]}>
      <Header about={about} />
      <Home projects={projects} about={about} />
      <Footer about={about} />
    </div>
  );
}
