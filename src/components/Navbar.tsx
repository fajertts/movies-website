import { Menu, StepForward, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed absolute top-0 left-0 w-full bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white z-50 px-20  ">
        <div className="w-full mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="w-auto h-full my-auto ">
            {" "}
            <StepForward size={32} />{" "}
          </div>
          {/* Navigation Links / Menu */}

          <ul className="hidden lg:flex space-x-4 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 cursor-pointer text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                className="hover:text-blue-500 cursor-pointer text-lg">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 cursor-pointer text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden transform hover:scale-125 transition-transform duration-300 hover:bg-white/10 p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden flex flex-col items-center gap-6 pb-6 text-lg">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
