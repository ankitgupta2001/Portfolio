import { Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Your layout with Header + Footer
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SkillSet from "./components/SkillSet/SkillSet";
import ProjectShowcase from "./components/ProjectShowCase/ProjectShowCase";
import Referals from "./components/Referals/Referals";
import Contact from "./components/ContactMe/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><About /><Hero /></Layout>} />
      <Route path="/home" element={<Layout><About /><Hero /></Layout>} />
      <Route path="/Skills" element={<Layout><SkillSet /></Layout>} />
      <Route path="/Projects" element={<Layout><ProjectShowcase /></Layout>} />
      <Route path="/Portfolio" element={<Layout><About /><ProjectShowcase /><Referals /><SkillSet /></Layout>} />
      <Route path="/Referals" element={<Layout><Referals /></Layout>} />
      <Route path="/Contact" element={<Layout><Contact /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;
