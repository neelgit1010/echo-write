import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [searchVisibility, setSearchVisibility] = useState(false);

  return (
    <nav className="navbar">
      <Link to={"/"} className="flex-none w-10">
        <img src={logo} alt="logo" className="w-full" />
      </Link>

      <div
        className={
          "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:relative md:p-0 md:inset-0 md:w-auto md:show " +
          (searchVisibility ? "show" : "hide")
        }
      >
        <input
          type="text"
          name="search"
          id="search"
          className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"
          placeholder="Search"
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none top-1/2 md:left-5 -translate-y-1/2 text-xl text-dark-grey"></i>
      </div>

      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button
          className="md:hidden bg-grey w-12 h-12 rounded-full flex justify-center items-center"
          onClick={() => setSearchVisibility((currValue) => !currValue)}
        >
          <i className="fi fi-rr-search text-xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
