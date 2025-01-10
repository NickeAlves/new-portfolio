import Hero from "./sections/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About></About>
      <Projects></Projects>
    </>
  );
};

export default Home;
