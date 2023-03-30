import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const featuredImage = (featuredImageObject) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let imgURL = featuredImageObject.source_url;
    let img = `<img src="${imgURL}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${featuredImageObject.alt_text}"
        srcset="${imgURL} ${imgWidth}w,
        ${featuredImageObject.media_details.sizes.large ? featuredImageObject.media_details.sizes.large.source_url + " 1024w," : ""}
        ${featuredImageObject.media_details.sizes.medium_large ? featuredImageObject.media_details.sizes.medium_large.source_url + " 768w," : ""}
        ${featuredImageObject.media_details.sizes.medium ? featuredImageObject.media_details.sizes.medium.source_url + " 300w" : ""}"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return { __html: img };
  };

  function getYear() {
    return new Date().getFullYear();
  }

  function hamburger() {
    const nav = document.querySelector(".site-navigation");
    nav.classList.toggle("hidden");
  }

  return (
    <Router basename="/">
      <div className="site-wrapper">
        <nav className="site-navigation hidden">
          <ul className="top-nav">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <p className="icon" onClick={hamburger}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </p>
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
