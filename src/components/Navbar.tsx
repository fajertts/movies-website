import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full text-white backdrop-blur-md z-50 px-20 backdrop-blur-md">
      <div className="w-full mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="w-auto h-12">Logo</div>
        {/* Navigation Links / Menu */}

        <ul className="hidden lg:flex space-x-4 text-sm font-medium">
          <li>
            <a href="" className="hover:text-blue-500 cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500 cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500 cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
