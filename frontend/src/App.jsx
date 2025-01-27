import { Route, Routes } from "react-router";
import "./App.css";
import { Footer, Home, Navbar } from "./components/import";
import { About } from "./Page/importpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
