import { useState, useEffect } from "react";
import Loading from "../components/Loading";

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
    let unactiveFilter = [];

    if (selectedFilter.classList.contains("active")) {
      return;
    } else {
      unactiveFilter = document.querySelectorAll(`.skills-filters-div .skills-filter`);
      unactiveFilter.forEach((el) => {
        el.classList.remove("active");
      });
      selectedFilter.classList.add("active");
    }

    if (selectedFilter.classList.contains("development")) {
      itemsToHide = document.querySelectorAll(`.skills-list-items .skill:not(.development)`);
      itemsToShow = document.querySelectorAll(`.skills-list-items .skill.development`);
    }
    if (selectedFilter.classList.contains("design")) {
      itemsToHide = document.querySelectorAll(`.skills-list-items .skill:not(.design)`);
      itemsToShow = document.querySelectorAll(`.skills-list-items .skill.design`);
    }
    if (selectedFilter.classList.contains("other")) {
      itemsToHide = document.querySelectorAll(`.skills-list-items .skill:not(.other)`);
      itemsToShow = document.querySelectorAll(`.skills-list-items .skill.other`);
    }
    if (selectedFilter.classList.contains("all")) {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(`.skills-list-items .skill`);
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
        <div className="page-wrapper" id="page-about">
          <div className="about-sections section-wrapper">
            <section className="about-biography">
              <h2>About Me</h2>
              <p>{restData.acf.biography}</p>
            </section>
            <section className="about-skills">
              <h2>My Technical Skills</h2>
              <div className="skills-list-container">
                <div className="skills-filters-div" onClick={handleChange}>
                  <button aria-label="All" className="all skills-filter active">
                    All
                  </button>
                  <button aria-label="Development" className="development skills-filter">
                    Development
                  </button>
                  <button aria-label="Design" className="design skills-filter">
                    Design
                  </button>
                  <button aria-label="Other" className="other skills-filter">
                    Other
                  </button>
                </div>
                <div className="skills-list-items">
                  {restData.acf.development_skills.map((feature) => (
                    <p key={feature.development_skill} className="development skill">
                      {feature.development_skill}
                    </p>
                  ))}
                  {restData.acf.design_skills.map((feature) => (
                    <p key={feature.design_skill} className="design skill">
                      {feature.design_skill}
                    </p>
                  ))}
                  {restData.acf.other_skills.map((feature) => (
                    <p key={feature.other_skill} className="other skill">
                      {feature.other_skill}
                    </p>
                  ))}
                </div>
              </div>
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
