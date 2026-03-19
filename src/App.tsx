import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
