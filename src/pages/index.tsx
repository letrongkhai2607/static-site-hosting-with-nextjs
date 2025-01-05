import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Portfolio</title>
      {/* Header */}
      <Header />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
      {/* Footer */}
      <Footer />
    </>
  );
}
