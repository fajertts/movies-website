import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f172a] text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo / description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Movie<span className="text-yellow-400">Hub</span>
            </h2>
            <p className="text-sm text-gray-400">
              Discover the best movies, trailers and reviews in one place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-400 cursor-pointer">Home</li>
              <li className="hover:text-yellow-400 cursor-pointer">Movies</li>
              <li className="hover:text-yellow-400 cursor-pointer">About</li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>

            <div className="flex gap-4">
              < FaFacebookF className="hover:text-yellow-400 cursor-pointer transition" />
              < FaTwitter className="hover:text-yellow-400 cursor-pointer transition" />
              < FaInstagram className="hover:text-yellow-400 cursor-pointer transition" />
              < FaYoutube className="hover:text-yellow-400 cursor-pointer transition" />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MovieHub. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;