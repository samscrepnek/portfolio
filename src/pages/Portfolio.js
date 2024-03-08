import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";

const Portfolio = () => {
  const restPath = "https://samscrepnek.ca/qM3B3Db6DyVW5YPK/wp-json/wp/v2/pinkmug-project?_embed&acf_format=standard";
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
          <div className="portfolio">
            <section className="works">
              {restData.map((post) => (
                <article key={post.id} id={`post-${post.id}`} className={`project ${post.acf.background_colour.value}`}>
                  <Link
                    aria-label={post.title.rendered}
                    to={`/${post.slug}`}
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    <div className="project-content-wrapper">
                      <div className="title-div">
                        <div className="hover-background">
                          <h3>{post.title.rendered}</h3>
                        </div>
                      </div>
                      {post.acf.hero_img.url && (
                        <picture>
                          <img aria-hidden="true" focusable="false" src={`${post.acf.hero_img.url}`} alt={`${post.acf.hero_img.alt}`}></img>
                        </picture>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </section>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Portfolio;
