import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
// import Contact from "../components/Contact";

const Home = () => {
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
      {isLoaded ? (
        <div className="page-wrapper">
          <div className="section-wrapper recent-works">
            <section>
              <h2>Recent Work</h2>
              <div className="home-works">
                {restData.slice(0, 3).map((post) => (
                  <article key={post.id} id={`post-${post.id}`} className="project">
                    <div className="project-content-wrapper">
                      <Link
                        to={`/${post.slug}`}
                        onClick={() => {
                          window.scroll(0, 0);
                        }}
                      >
                        {post.acf.mobile_hero.url ? (
                          <picture>
                            <source media="(min-width: 650px)" srcSet={`${post.acf.hero_img.url}`} />
                            <img src={`${post.acf.mobile_hero.url}`} alt={`${post.acf.mobile_hero.alt}`}></img>
                          </picture>
                        ) : (
                          <img src={`${post.acf.hero_img.url}`} alt={`${post.acf.hero_img.alt}`}></img>
                        )}
                        <h3>{post.title.rendered}</h3>
                      </Link>
                      <div className="project-overview">
                        <p>{post.acf.project_overview}</p>
                      </div>
                      <Link
                        to={`/${post.slug}`}
                        onClick={() => {
                          window.scroll(0, 0);
                        }}
                      >
                        <button className="project-btn">View Full Project Page</button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            {/* <section className="home-cta">
              <div className="cta-wrapper">
                <Link
                  to="/portfolio"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <button>View Portfolio</button>
                </Link>
              </div>
            </section> */}
          </div>
          {/* <Contact /> */}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Home;
