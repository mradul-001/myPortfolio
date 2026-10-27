import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter basename="/myPortfolio/">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Old /projects links land on the Work section of the home page. */}
        <Route path="/projects" element={<Home scrollTo="work" />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
