import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
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

  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <Router basename="/">
      <div className="site-wrapper">
        <nav className="site-navigation hidden">
          <ul className="top-nav">
            <li>
              <NavLink to="/" end>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <button className="icon" onClick={hamburger}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </button>
        </nav>
        <header id="masthead" className="site-header">
          <div className="site-branding">
            <h1 className="site-title">Sam Screpnek</h1>
            <h2>A Front-End Web Developer</h2>
          </div>
        </header>
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/:slug" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <p>Site made by Sam Screpnek.</p>
          <p className="copyright">&copy;{getYear()}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
