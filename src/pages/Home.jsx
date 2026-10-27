import { useEffect } from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

function Home({ scrollTo }) {
  useEffect(() => {
    if (!scrollTo) return;
    document.getElementById(scrollTo)?.scrollIntoView({ behavior: "instant" });
    window.history.replaceState(null, "", `${import.meta.env.BASE_URL}#${scrollTo}`);
  }, [scrollTo]);

  return (
    <>
      <Nav />
      <main>
        <Intro />
        <Experience />
        <Projects />
        <About />
        <Achievements />
      </main>
      <Contact />
    </>
  );
}

export default Home;
