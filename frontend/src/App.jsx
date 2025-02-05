import { Route, Routes } from "react-router";
import "./App.css";
import {
  Dashboard,
  FavCourse,
  Footer,
  Login,
  MyCourse,
  Navbar,
  PasswordChange,
  ProfileSetting,
  RecCourse,
  Register,
} from "./components/import";
import { About, CourseDetails, Home } from "./Page/importpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/my-courses" element={<MyCourse />} />
        <Route path="/favorite-courses" element={<FavCourse />} />
        <Route path="/recommended-courses" element={<RecCourse />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/change-password" element={<PasswordChange />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
