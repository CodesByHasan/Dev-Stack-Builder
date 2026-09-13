import navimg from "../assets/logo-text.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-base-100">

      <nav className="container mx-auto py-4">

        {/* ================= MOBILE NAVBAR ================= */}

        <div className="flex items-center justify-between md:hidden">

          
          <button className="text-xl">
            <FaBars />
          </button>

          
          <img
            src={navimg}
            alt="DevStack Builder"
            className="h-10 w-auto"
          />

         
          <div className="flex items-center gap-2">
            <button className="text-sm">
              Sign In
            </button>

            <button className="rounded-full bg-[#D91B7E] px-3 py-2 text-sm text-white">
              Sign Up
            </button>
          </div>

        </div>


        {/* ================= DESKTOP NAVBAR ================= */}

        <div className="hidden items-center justify-between md:flex">

          {/* Logo */}
          <img
            src={navimg}
            alt="DevStack Builder"
            className="h-10 w-auto"
          />

          {/* Menu */}
          <ul className="flex items-center gap-4">
            <li>
              <a className="text-[#DB2777]" href="Home">
                Home
              </a>
            </li>

            <li>
              <a className="text-[#475569]" href="Technologies">
                Technologies
              </a>
            </li>

            <li>
              <a className="text-[#475569]" href="Projects">
                Projects
              </a>
            </li>

            <li>
              <a className="text-[#475569]" href="About">
                About
              </a>
            </li>

            <li>
              <a className="text-[#475569]" href="Contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button>
              Sign In
            </button>

            <button className="rounded-full bg-[#D91B7E] px-6 py-2 text-white">
              Sign Up
            </button>
          </div>

        </div>

      </nav>
    </div>
  );
};

export default Navbar;
      
     