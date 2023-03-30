import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Home = () => {
  const restPath = "https://samscrepnek.ca/qM3B3Db6DyVW5YPK/wp-json/wp/v2/pinkmug-project?_embed&acf_format=standard";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  const [numProjects, setNumProjects] = useState(3);
  const [isMoreProjects, setMoreProjects] = useState(true);
  const [projectTotal, setProjectTotal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setProjectTotal(data.length);
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  function handleChange() {
    let loadNum = numProjects + 2;
    if (loadNum >= projectTotal) {
      setMoreProjects(false);
      loadNum = projectTotal;
    }
    setNumProjects(loadNum);
  }

  return (
    <>
      {isLoaded ? (
        <div className="portfolio">
          <h2>Portfolio</h2>
          {restData.slice(0, numProjects).map((post) => (
            <article key={post.id} id={`post-${post.id}`} className="project">
              <Link to={`/${post.slug}`}>
                {post.acf.mobile_hero.url ? (
                  <picture>
                    <source media="(min-width: 650px)" srcSet={`${post.acf.hero_img.url}`} />
                    <img src={`${post.acf.mobile_hero.url}`} alt=""></img>
                  </picture>
                ) : (
                  <img src={`${post.acf.hero_img.url}`} alt=""></img>
                )}
              </Link>
              <Link to={`/${post.slug}`}>
                <h3>{post.title.rendered}</h3>
              </Link>
              <p>{post.acf.description}</p>
              <Link to={`/${post.slug}`}>
                <p>View Full Project Page</p>
              </Link>
            </article>
          ))}
          {isMoreProjects && (
            <p onClick={handleChange} className="load-more-btn">
              Load More Projects
            </p>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
