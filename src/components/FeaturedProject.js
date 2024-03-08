import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedProject = (params) => {
  const restPath = `https://samscrepnek.ca/qM3B3Db6DyVW5YPK/wp-json/wp/v2/pinkmug-project/${params.postID}?acf_format=standard`;
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
        <article id="featured-project" className={`project ${restData.acf.background_colour.value}`}>
          <Link
            aria-label={restData.title.rendered}
            to={`/${restData.slug}`}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <div className="project-content-wrapper">
              <div className="title-div">
                <div className="hover-background"></div>
                <h3>{restData.title.rendered}</h3>
              </div>
              {restData.acf.hero_img.url && (
                <picture>
                  <img aria-hidden="true" focusable="false" src={`${restData.acf.hero_img.url}`} alt={`${restData.acf.hero_img.alt}`}></img>
                </picture>
              )}
            </div>
          </Link>
        </article>
      ) : (
        <></>
      )}
    </>
  );
};
export default FeaturedProject;
