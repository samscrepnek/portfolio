import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

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
        <div className="portfolio">
          {restData.map((post) => (
            <article key={post.id} id={`post-${post.id}`}>
              <img src={`${post.acf.hero_img.url}`} alt=""></img>
              <Link to={`/blog/${post.slug}`}>
                <h2>{post.title.rendered}</h2>
              </Link>
              <p>{post.acf.description}</p>
            </article>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
