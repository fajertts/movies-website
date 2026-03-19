import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Hero/>} />
       <Route path="login" element={<Login />} />
            <Route path="About" element={<About />} />
            <Route path="contact" element={<Contact />} />
    </Route>,
  ),
);
function App() {
  return (
    <>
     <RouterProvider router={router} />
      
       
    </>
  );
}

export default App;
