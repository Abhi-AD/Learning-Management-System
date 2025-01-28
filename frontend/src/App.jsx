import { Route, Routes } from "react-router";
import "./App.css";
import { Footer, Navbar } from "./components/import";
import { About, CourseDetails, Home } from "./Page/importpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
