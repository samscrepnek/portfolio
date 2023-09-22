import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

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
          <div className="portfolio">
            <section className="works">
              {restData.map((post) => (
                <article key={post.id} id={`post-${post.id}`} className="project">
                  <Link
                    aria-label={post.title.rendered}
                    to={`/${post.slug}`}
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    <div className="project-content-wrapper">
                      <div className="title-div">
                        <div className="hover-background"></div>
                        <h3>{post.title.rendered}</h3>
                      </div>
                      {post.acf.mobile_hero.url ? (
                        <picture>
                          <source media="(min-width: 650px)" srcSet={`${post.acf.hero_img.url}`} />
                          <img aria-hidden="true" focusable="false" src={`${post.acf.mobile_hero.url}`} alt={`${post.acf.mobile_hero.alt}`}></img>
                        </picture>
                      ) : (
                        <img aria-hidden="true" focusable="false" src={`${post.acf.hero_img.url}`} alt={`${post.acf.hero_img.alt}`}></img>
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
export default Home;
