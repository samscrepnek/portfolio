import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import CopyEmail from "./CopyEmail";

const Nav = () => {
  useEffect(() => {
    window.addEventListener("click", (event) => {
      const nav = document.querySelector(".site-navigation");
      const icon = document.querySelector(".icon");
      if (event.target !== icon) {
        nav.classList.add("hidden");
      }
    });
  }, []);

  // function openMenu() {
  //   const nav = document.querySelector(".nav-menu-container");
  //   console.log(nav);
  //   nav.classList.remove("hidden");
  // }

  // function closeMenu() {
  //   const nav = document.querySelector(".nav-menu-container");
  //   console.log(nav);
  //   nav.classList.add("hidden");
  // }

  function toggleMenu() {
    const nav = document.querySelector(".nav-menu-container");
    nav.classList.toggle("hidden");
  }

  return (
    <nav className="top-nav">
      <ul>
        <li>
          <NavLink to="/">Sam Screpnek</NavLink>
        </li>
        <li>
          <button className="menu-icon" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </button>
        </li>
        <div className="nav-menu-container hidden">
          <button className="close-icon" onClick={toggleMenu}>
            x
          </button>
          <ul className="nav-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <CopyEmail />
            </li>
            <li>
              <a href="https://linkedin.com/in/sam-screpnek-389927251" target="blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/samscrepnek" target="blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
