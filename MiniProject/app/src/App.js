import "./App.css";
import Sidebar from "./components/Sidebar";
import MyAppBar from "./components/MyAppBar";
import Content from "./components/Content";
// import SignIn from "./components/SignIn";
import MyForm from "./ComponentsExp/MyForm";
import TryForm from "./components/TryForm";
import TryLogin from "./components/TryLogin";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Logout from "./components/Logout";
import ParentPortal from "./components/ParentPortal";
import TeacherDashboard from "./components/TeacherDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<TryLogin />} />
        <Route path="register" element={<TryForm />} />
        <Route path="parent" element={<ParentPortal />} />
        <Route path="teacher" element={<TeacherDashboard />} />
        <Route path="logout" element={<Logout />} />
        {/* <Route path="unauthorized" element={<Unauthorized />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
