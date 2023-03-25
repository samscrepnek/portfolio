import { useState, useEffect } from "react";
import Loading from "./Loading";

const Contact = () => {
  const restPath = "https://samscrepnek.ca/qM3B3Db6DyVW5YPK/wp-json/wp/v2/pages/32?_embed";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  let counter = 0;

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

  function emailTimer() {
    let myInterval = setInterval(timer, 1000);
    function timer() {
      if (counter === 0) {
        console.log("nop");
        setEmailCopied(false);
        return clearInterval(myInterval);
      }
      if (counter > 0) {
        counter -= 1;
        console.log("yup");
      }
    }
  }

  function copyEmailToClipboard() {
    navigator.clipboard.writeText(restData.acf.email);
    setEmailCopied(true);
    counter = 5;
    emailTimer();
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
            {/* {emailCopied ? <p onClick={copyEmailToClipboard}>Copy Email</p> : <p>Email Copied</p>} */}

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
