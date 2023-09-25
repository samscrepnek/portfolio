import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

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
            </header>
            <div className="header-description-flex-wrapper">
              {restData.acf.hero_img.url && (
                <picture>
                  <img aria-hidden="true" focusable="false" src={`${restData.acf.hero_img.url}`} alt={`${restData.acf.hero_img.alt}`}></img>
                </picture>
              )}

              <section className="project-page-description">
                <div dangerouslySetInnerHTML={{ __html: restData.acf.description }} className="wysiwyg-description"></div>
              </section>
            </div>

            {restData.acf.live_site_link && (
              <section className="project-page-links">
                <div className="project-links-wrapper">
                  {restData.acf.live_site_link && (
                    <p>
                      <a aria-label="Link to live site" href={`${restData.acf.live_site_link.url}`} target={`${restData.acf.live_site_link.target}`}>
                        {restData.acf.live_site_link.title}
                      </a>
                    </p>
                  )}
                </div>
              </section>
            )}

            {restData.acf.skills_used && restData.acf.skills_used.length > 0 && (
              <section className="project-page-skills">
                <h2>Skills Used</h2>
                <div className="skills-list">
                  <ul>
                    {restData.acf.skills_used.map((skills) => (
                      <li key={skills}>{skills}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {restData.acf.features && (
              <section className="project-page-features">
                <h2>Key Features</h2>
                {restData.acf.features.map((feature) => (
                  <div key={feature.feature_title} className="project-feature">
                    <div className="project-feature-content">
                      <h3>{feature.feature_title}</h3>
                      <p>{feature.feature_description}</p>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {restData.acf.git_link && (
              <section className="project-page-links">
                <div className="project-links-wrapper">
                  {restData.acf.git_link && (
                    <p>
                      <a aria-label="Link to github repo" href={`${restData.acf.git_link.url}`} target={`${restData.acf.git_link.target}`}>
                        {restData.acf.git_link.title}
                      </a>
                    </p>
                  )}
                </div>
              </section>
            )}

            {restData.acf.takeaways && (
              <section className="project-page-takeaways">
                <h2>Takeaways</h2>
                <p>{restData.acf.takeaways}</p>
              </section>
            )}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Project;
