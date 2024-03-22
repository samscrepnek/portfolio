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
          <div id="home">
            <header id="home-header">
              <div id="home-header-info">
                <p>Hi I'm</p>
                <h1>Sam Screpnek</h1>
              </div>
              {restData.acf.main_image.url && (
                <div id="home-header-pic">
                  <picture>
                    <img aria-hidden="true" focusable="false" src={`${restData.acf.main_image.url}`} alt={`${restData.acf.main_image.alt}`}></img>
                  </picture>
                </div>
              )}
            </header>
            <div id="home-flex-div">
              <section id="home-blurb">
                <p>A Web Developer specializing in web design, development, and SEO.</p>
              </section>
              <section className="about-cta">
                <Link
                  className="cta"
                  aria-label="about-link"
                  to="/about"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <button>
                    <p>Read about my story </p>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" />
                    </svg>
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
                  className="cta"
                  aria-label="portfolio-link"
                  to="/portfolio"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <button>
                    <p>Or look at my full portfolio</p>
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" />
                    </svg>
                  </button>
                </Link>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Home;
