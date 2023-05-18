import About from "./components/About";
import Formation from "./components/Formation";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="bg-[#192a51]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Formation />
      <Work />
    </div>
  );
}

export default App;
