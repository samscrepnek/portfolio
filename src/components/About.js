import { useState, useEffect } from "react";
import Loading from "./Loading";

const About = () => {
  const restPath = "https://samscrepnek.ca/qM3B3Db6DyVW5YPK/wp-json/wp/v2/pages/30?_embed";
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
        <article id="page-about">
          <h1>{restData.title.rendered}</h1>
          <div className="about-biography">
            <p>{restData.acf.biography}</p>
          </div>
          <div className="about-skills">
            <h2>Technical Skills</h2>
            <div dangerouslySetInnerHTML={{ __html: restData.acf.technical_skills }}></div>
          </div>
          <div className="about-hobbies">
            <h2>Hobbies</h2>
            <div dangerouslySetInnerHTML={{ __html: restData.acf.hobbies }}></div>
          </div>
        </article>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
