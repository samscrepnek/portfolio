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
        <div id="page-about">
          <section className="about-biography">
            <p>{restData.acf.biography}</p>
          </section>
          <div className="about-lists">
            <section className="about-skills">
              <h2>Technical Skills</h2>
              <div dangerouslySetInnerHTML={{ __html: restData.acf.technical_skills }} className="wysiwyg-list"></div>
            </section>
            <section className="about-hobbies">
              <h2>Hobbies</h2>
              <div dangerouslySetInnerHTML={{ __html: restData.acf.hobbies }} className="wysiwyg-list"></div>
            </section>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
