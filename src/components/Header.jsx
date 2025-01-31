import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut ,  } = useAuth();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg  z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Food</Link>
              </li>
              <li>
                <a>Bookmarks</a>
              </li>
              <label className="grid cursor-pointer place-items-center">
                <input
                  type="checkbox"
                  checked={theme === "synthwave"}
                  onChange={handleToggle}
                  className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                />
                <svg
                  className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-primary font-bold">
            S.Food
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li className="font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold">
              <Link to="/blogs">Foods</Link>
            </li>
            <li className="font-bold">
              <a>Bookmarks</a>
            </li>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                checked={theme === "synthwave"}
                onChange={handleToggle}
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </ul>
        </div>
        {user ? (
          <div className="flex items-center space-x-4">
            {/* Profile Picture */}
            {user?.photoURL && (
              <div className="relative">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile"
                  src={user?.photoURL}
                  className="w-10 h-10 rounded-full border-2 border-yellow-500"
                />
              </div>
            )}
            {/* Logout Button */}
            <button
              onClick={logOut}
              className="btn bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md transition-all duration-300"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            {/* Login Button */}
            <Link
              to="/login"
              className="btn bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-md transition-all duration-300"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
