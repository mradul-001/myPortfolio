import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contribution from "../components/Contribution";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Contribution></Contribution>
      <TechStack></TechStack>
      <Footer></Footer>
    </>
  );
}

export default Home;
