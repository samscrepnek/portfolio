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

  function copyEmailTimer() {
    let myInterval = setInterval(resetEmailCopied, 3500);
    function resetEmailCopied() {
      setEmailCopied(false);
      return clearInterval(myInterval);
    }
  }

  function copyEmailToClipboard() {
    navigator.clipboard.writeText(restData.acf.email);
    setEmailCopied(true);
    copyEmailTimer();
  }

  return (
    <>
      {isLoaded ? (
        <article id={`page-${restData.id}`}>
          <h1>{restData.title.rendered}</h1>
          <div className="entry-content">
            <p>{restData.acf.description}</p>
          </div>
          <div>
            <p onClick={copyEmailToClipboard}>{!emailCopied ? "Copy Email" : "Email Copied"}</p>

            <p>
              <a href={`${restData.acf.linkedin}`}>LinkedIn</a>
            </p>
            <p>
              <a href={`${restData.acf.github}`}>GitHub</a>
            </p>
          </div>
        </article>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Contact;
