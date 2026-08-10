import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavItemClick = () => {
    setNav(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.target = "_blank";
    link.click();
  };

  const combine = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.target = "_blank";
    link.click();
    setNav(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 flex justify-between md:px-48 px-8 md:py-5 py-5 items-center text-ink backdrop-blur-md bg-base/80 border-b border-border">
        <div className="logo">
          <Link
            to="/"
            className="font-semibold font-marcellus md:text-[30px] text-[22px] tracking-wide"
          >
            MS
          </Link>
        </div>
        <div className="hidden links md:flex md:space-x-8 flex-col md:flex-row items-center font-oddlini text-base tracking-wide text-muted">
          <Link to="/projects" className="hover:text-accent transition-colors duration-200">
            Projects
          </Link>
          <a onClick={handleDownload} className="cursor-pointer hover:text-accent transition-colors duration-200">
            Resume
          </a>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <div
            className="menuicon text-xl cursor-pointer text-ink"
            onClick={handleNav}
          >
            <RxHamburgerMenu />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`mobilenav fixed h-screen w-full top-0 right-0 bg-base p-10
                        ${nav ? "translate-x-0" : "translate-x-full"}
                        transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-end">
            <div
              className="closeicon text-xl cursor-pointer text-ink"
              onClick={handleNav}
            >
              <IoMdClose />
            </div>
          </div>
          <div className="flex flex-col space-y-8 mt-16 items-center text-ink">
            <Link
              to="/projects"
              className="font-oddlini"
              onClick={handleNavItemClick}
            >
              Projects
            </Link>
            <a className="font-oddlini cursor-pointer" onClick={combine}>
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
