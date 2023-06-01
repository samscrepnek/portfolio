import { useEffect } from "react";
import { NavLink } from "react-router-dom";

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
      <button className="icon" onClick={hamburger}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </button>
      <ul className="top-nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <a href="#page-contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
