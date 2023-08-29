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

  function hamburger() {
    const nav = document.querySelector(".site-navigation");
    nav.classList.toggle("hidden");
  }

  return (
    <nav className="site-navigation hidden">
      <ul>
        <li>Sam Screpnek</li>
        <li>
          <button className="icon" onClick={hamburger}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </button>
        </li>
        <ul className="top-nav">
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
      </ul>
    </nav>
  );
};

export default Nav;
