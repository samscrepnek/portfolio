import { NavLink } from "react-router-dom";
// disableScroll module from https://github.com/gilbarbara/disable-scroll  //
import disableScroll from "disable-scroll";
import CopyEmail from "./CopyEmail";

const Nav = () => {
  function toggleMenu() {
    const nav = document.querySelector(".nav-menu-container");
    nav.classList.toggle("hidden");
  }

  const openMenu = () => {
    toggleMenu();
    disableScroll.on();
  };

  const closeMenu = () => {
    toggleMenu();
    disableScroll.off();
  };

  return (
    <nav className="top-nav">
      <menu>
        <ul className="top-nav-inner-wrapper">
          <ul id="top-nav-left">
            <li id="screpnek-link">
              <NavLink aria-label="Link to home page" to="/" className="name-home-link">
                Sam Screpnek
              </NavLink>
            </li>
            <ul id="desktop-links">
              <li>
                <NavLink aria-label="Link to home page" to="/" className="name-home-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink aria-label="Link to portfolio page" to="/portfolio" className="name-home-link">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink aria-label="Link to about page" to="/about" className="name-home-link">
                  About
                </NavLink>
              </li>
            </ul>
          </ul>
          <li id="top-nav-right">
            <button aria-label="Open menu" className="menu-icon" onClick={openMenu}>
              <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 6h-24v-3h24v4zm0 5h-24v3h24v-4zm0 8h-24v3h24v-4z" />
              </svg>
            </button>
          </li>
        </ul>
        <div className="nav-menu-container hidden">
          <div className="nav-menu-wrapper">
            <button aria-label="Close menu" className="close-icon" onClick={closeMenu}>
              <svg aria-hidden="true" focusable="false" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" width="32" height="32" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
              </svg>
            </button>
            <menu className="nav-menu">
              <li>
                <NavLink aria-label="Link to home page" to="/" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink aria-label="Link to portfolio page" to="/portfolio" onClick={closeMenu}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink aria-label="Link to about page" to="/about" onClick={closeMenu}>
                  About
                </NavLink>
              </li>

              <ul className="social-links">
                <li>
                  <a aria-label="Link to LinkedIn" href="https://linkedin.com/in/sam-screpnek-389927251" target="blank">
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a aria-label="Link to Github" href="https://github.com/samscrepnek" target="blank">
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                      />
                    </svg>
                    Github
                  </a>
                </li>
              </ul>
              <li>
                <CopyEmail />
              </li>
            </menu>
          </div>
        </div>
      </menu>
    </nav>
  );
};

export default Nav;
