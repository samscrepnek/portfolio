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

  function handleChange(event) {
    let selectedFilter = event.target;
    let itemsToHide = [];
    let itemsToShow = [];
    if (selectedFilter.classList.contains("development")) {
      itemsToHide = document.querySelectorAll(`.skills-list .skill:not(.development)`);
      itemsToShow = document.querySelectorAll(`.skills-list .skill.development`);
    }
    if (selectedFilter.classList.contains("design")) {
      itemsToHide = document.querySelectorAll(`.skills-list .skill:not(.design)`);
      itemsToShow = document.querySelectorAll(`.skills-list .skill.design`);
    }
    if (selectedFilter.classList.contains("other")) {
      itemsToHide = document.querySelectorAll(`.skills-list .skill:not(.other)`);
      itemsToShow = document.querySelectorAll(`.skills-list .skill.other`);
    }
    if (selectedFilter.classList.contains("all")) {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(`.skills-list .skill`);
    }

    itemsToHide.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show");
    });

    itemsToShow.forEach((el) => {
      el.classList.remove("hide");
      el.classList.add("show");
    });
  }

  return (
    <>
      {isLoaded ? (
        <div id="page-about">
          <section className="about-biography">
            <h2>About Me</h2>
            <p>{restData.acf.biography}</p>
          </section>
          <section className="about-skills">
            <h2>My Technical Skills</h2>
            <div className="skills-filters-div" onClick={handleChange}>
              <button className="development skills-filter">Development</button>
              <button className="design skills-filter">Design</button>
              <button className="other skills-filter">Other</button>
              <button className="all skills-filter">All</button>
            </div>
            <div className="skills-list">
              {restData.acf.development_skills.map((feature) => (
                <p key={feature} className="development skill">
                  {feature.development_skill}
                </p>
              ))}
              {restData.acf.design_skills.map((feature) => (
                <p key={feature} className="design skill">
                  {feature.design_skill}
                </p>
              ))}
              {restData.acf.other_skills.map((feature) => (
                <p key={feature} className="other skill">
                  {feature.other_skill}
                </p>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
