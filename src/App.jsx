import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
