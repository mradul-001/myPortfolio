import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

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
      <nav className="flex justify-between md:px-48 px-8 md:py-6 py-6 items-center text-white">
        <div className="logo">
          <Link
            to="/"
            className="font-extrabold font-audiowide md:text-[36px] text-[24px]"
          >
            MS
          </Link>
        </div>
        <div className="hidden links md:flex md:space-x-8 flex-col md:flex-row font-oddlini text-lg cursor-pointer">
          <Link to="/projects">Projects</Link>
          <a onClick={handleDownload}>Resume</a>
        </div>
        <div
          className="menuicon text-xl cursor-pointer md:hidden"
          onClick={handleNav}
        >
          <RxHamburgerMenu />
        </div>

        {/* Mobile Navigation */}
        <div
          className={`mobilenav fixed h-screen w-full top-0 bg-gray-800 p-10 
                        ${nav ? "right-0" : "-right-full"} 
                        transition-all duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-end">
            <div
              className="closeicon text-xl cursor-pointer"
              onClick={handleNav}
            >
              <IoMdClose />
            </div>
          </div>
          <div className="flex flex-col space-y-8 mt-16 items-center ">
            <Link
              to="/projects"
              className="font-oddlini"
              onClick={handleNavItemClick}
            >
              Projects
            </Link>
            <a className="font-oddlini" onClick={combine}>
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
