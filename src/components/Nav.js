import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import CopyEmail from "./CopyEmail";

const Nav = () => {
  // useEffect(() => {
  //   // const nav = document.querySelector(".nav-menu-container");
  //   window.addEventListener("click", (event) => {
  //     const nav = document.querySelector(".nav-menu-container");
  //     const icon = document.querySelector(".menu-icon");
  //     console.log(nav);
  //     if (event.target !== icon) {
  //       nav.classList.add("hidden");
  //     }
  //     // nav.classList.add("hidden");
  //   });
  // }, []);

  // useEffect(() => {
  //   const nav = document.querySelector(".nav-menu-container");
  //   nav.addEventListener("click", () => {
  //     toggleMenu();
  //   });
  // }, []);

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
        <div className="top-nav-inner-wrapper">
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
        </div>
        <div className="nav-menu-container hidden">
          <button className="close-icon" onClick={toggleMenu}>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" width="32" height="32" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </button>
          <ul className="nav-menu">
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>
                About
              </NavLink>
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
