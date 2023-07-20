import "vazir-font/dist/font-face.css";
import "./App.css";
import Header from "./Components/Header";
import ServiceInfo from "./Components/ServiceInfo";
import Parallax from "./Components/Parallax";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <ServiceInfo />
      <Parallax />
      <Contact />
    </div>
  );
}

export default App;
