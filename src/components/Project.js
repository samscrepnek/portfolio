import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Project = () => {
  const { slug } = useParams();
  const restPath = `https://samscrepnek.ca/qM3B3Db6DyVW5YPK/wp-json/wp/v2/pinkmug-project/?slug=${slug}&_embed&acf_format=standard`;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data[0]);
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
        <>
          <div className="project-page" id={`${slug}`}>
            <header>
              <h1>{restData.title.rendered}</h1>
              {restData.acf.mobile_hero.url ? (
                <picture>
                  <source media="(min-width: 650px)" srcSet={`${restData.acf.hero_img.url}`} />
                  <img src={`${restData.acf.mobile_hero.url}`} alt=""></img>
                </picture>
              ) : (
                <img src={`${restData.acf.hero_img.url}`} alt=""></img>
              )}
            </header>
            <section className="project-page-description">
              <h2>Description</h2>
              <p>{restData.acf.description}</p>
            </section>

            {restData.acf.skills_used && restData.acf.skills_used.length > 0 && (
              <section className="project-page-skills">
                <h2>Skills Used</h2>
                <ul>
                  {restData.acf.skills_used.map((skills) => (
                    <li key={skills}>{skills}</li>
                  ))}
                </ul>
              </section>
            )}

            {restData.acf.features && (
              <section className="project-page-features">
                <h2>Key Features</h2>
                {restData.acf.features.map((feature) => (
                  <div key={feature} className="project-feature">
                    <img src={`${feature.feature_img.url}`} alt=""></img>
                    <h3>{feature.feature_title}</h3>
                    <p>{feature.feature_description}</p>
                  </div>
                ))}
              </section>
            )}

            {restData.acf.takeaways && (
              <section className="project-page-takeaways">
                <h2>Takeaways</h2>
                <p>{restData.acf.takeaways}</p>
              </section>
            )}

            {(restData.acf.git_link || restData.acf.live_site_link) && (
              <section className="project-page-links">
                {restData.acf.git_link && (
                  <p>
                    <a href={`${restData.acf.git_link.url}`} target={`${restData.acf.live_site_link.target}`}>
                      {restData.acf.git_link.title}
                    </a>
                  </p>
                )}

                {restData.acf.live_site_link && (
                  <p>
                    <a href={`${restData.acf.live_site_link.url}`} target={`${restData.acf.live_site_link.target}`}>
                      {restData.acf.live_site_link.title}
                    </a>
                  </p>
                )}
              </section>
            )}
            {/* <nav className="posts-navigation">
            {restData.previous_post["id"] && (
              <Link to={`/blog/${restData.previous_post["slug"]}`} className="prev-post">
                Previous: {restData.previous_post["title"]}
              </Link>
            )}
          </nav> */}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Project;
