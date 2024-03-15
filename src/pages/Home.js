import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";
import FeaturedProject from "../components/FeaturedProject";

const Home = () => {
  const restPath = "https://samscrepnek.ca/qM3B3Db6DyVW5YPK/wp-json/wp/v2/pages/144?acf_format=standard";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();

        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      <Helmet>
        <title>Sam Screpnek Web developer</title>
        <meta name="description" content="Sam Screpnek Web developer | Web Developer dedicated to creating cutting-edge and accesible online solutions. Located in Vancouver, BC, Canada."></meta>
      </Helmet>
      {isLoaded ? (
        <div className="page-wrapper">
          <div className="home">
            <header id="home-header">
              <div className="info">
                <p>Hi I'm</p>
                <h1>Sam Screpnek</h1>
              </div>
              {restData.acf.main_image.url && (
                <div className="intro-pic">
                  <picture>
                    <img aria-hidden="true" focusable="false" src={`${restData.acf.main_image.url}`} alt={`${restData.acf.main_image.alt}`}></img>
                  </picture>
                </div>
              )}
              <div>
                <p>A Web Developer specializing in web design, development, and SEO.</p>
              </div>
            </header>
            <section className="about-cta">
              <Link
                aria-label="about-link"
                to="/about"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <button>
                  <p>Read about my story</p>
                </button>
              </Link>
            </section>
            {restData.acf.featured_project.ID && (
              <section id="home-featured-section">
                <p>Check out my recent project</p>
                <FeaturedProject postID={restData.acf.featured_project.ID} />
              </section>
            )}
            <section className="portfolio-cta">
              <Link
                aria-label="portfolio-link"
                to="/portfolio"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <button>
                  <p>Or look at my full portfolio</p>
                </button>
              </Link>
            </section>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Home;
