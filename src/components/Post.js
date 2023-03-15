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

  const checkACFContent = function (item) {
    if (restData.acf.hasOwnProperty(item)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {isLoaded ? (
        <>
          <article id={`post-${restData.id}`}>
            <h1>{restData.title.rendered}</h1>
            <div>
              <img src={`${restData.acf.hero_img.url}`} alt=""></img>
            </div>

            <div>
              <h2>Description</h2>
              <p>{restData.acf.description}</p>
            </div>

            {checkACFContent("skills_used") ? (
              <div>
                <h2>Skills Used</h2>
                <ul>
                  {restData.acf.skills_used.map((skills) => (
                    <li key={skills}>{skills}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}

            {checkACFContent("features") ? (
              <div>
                <h2>Features</h2>
                {restData.acf.features.map((feature) => (
                  <div key={feature}>
                    <img src={`${feature.feature_img.url}`} alt=""></img>
                    <h3>{feature.feature_title}</h3>
                    <p>{feature.feature_description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}

            {checkACFContent("takeaways") ? (
              <div>
                <h2>Takeaways</h2>
                <p>{restData.acf.takeaways}</p>
              </div>
            ) : (
              <></>
            )}

            <div>
              {checkACFContent("git_link") ? (
                <p>
                  <a href={`${restData.acf.git_link.url}`} target={`${restData.acf.live_site_link.target}`}>
                    {restData.acf.git_link.title}
                  </a>
                </p>
              ) : (
                <></>
              )}

              {checkACFContent("live_site_link") ? (
                <p>
                  <a href={`${restData.acf.live_site_link.url}`} target={`${restData.acf.live_site_link.target}`}>
                    {restData.acf.live_site_link.title}
                  </a>
                </p>
              ) : (
                <></>
              )}
            </div>
          </article>
          {/* <nav className="posts-navigation">
            {restData.previous_post["id"] && (
              <Link to={`/blog/${restData.previous_post["slug"]}`} className="prev-post">
                Previous: {restData.previous_post["title"]}
              </Link>
            )}
          </nav> */}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Project;
