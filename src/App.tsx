import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Hero/>} />
       <Route path="login" element={<Login />} />
      {/* <Route path="About" element={<About />} /> */}
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
