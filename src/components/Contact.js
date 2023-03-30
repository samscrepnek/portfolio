import { useState, useEffect } from "react";
import Loading from "./Loading";

const Contact = () => {
  const restPath = "https://samscrepnek.ca/qM3B3Db6DyVW5YPK/wp-json/wp/v2/pages/32?_embed";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

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

  function copyEmailToClipboard() {
    navigator.clipboard.writeText(restData.acf.email);
    setEmailCopied(true);
    function copyEmailTimer() {
      let myInterval = setInterval(resetEmailCopied, 3500);
      function resetEmailCopied() {
        setEmailCopied(false);
        return clearInterval(myInterval);
      }
    }
    copyEmailTimer();
  }

  return (
    <>
      {isLoaded ? (
        <div id="page-contact">
          <h1>{restData.title.rendered}</h1>
          <section className="contact-description">
            <p>{restData.acf.description}</p>
          </section>
          <nav className="contact-links">
            <button onClick={copyEmailToClipboard} className="contact-email-btn">
              {!emailCopied ? "Copy Email" : "Email Copied"}
            </button>

            <p>
              <a href={`${restData.acf.linkedin}`} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
            <p>
              <a href={`${restData.acf.github}`} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </nav>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Contact;
