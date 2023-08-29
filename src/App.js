import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Background from "./components/Background";

function App() {
  return (
    <Router basename="/">
      {/* <Background /> */}
      <div className="site-wrapper">
        <Nav />
        {/* <header id="masthead" className="site-header">
          <div className="site-branding">
            <h1 className="site-title">Sam Screpnek</h1>
            <h2>Front-End Web Developer</h2>
          </div>
        </header> */}
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/:slug" element={<Project />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
