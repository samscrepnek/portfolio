import { useState, useEffect } from "react";
import Loading from "./Loading";

const Contact = () => {
  const restPath = "https://samscrepnek.ca/qM3B3Db6DyVW5YPK/wp-json/wp/v2/pages/32?_embed";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [counter, setCounter] = useState(0);

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

  useEffect(() => {
    let myInterval = setInterval(timer, 1000);
    function timer() {
      if (counter > 0) {
        setCounter(counter - 1);
        setEmailCopied(true);
        console.log("yup");
      } else if (counter <= 0) {
        console.log("nop");
        setEmailCopied(false);
        clearInterval(myInterval);
      }
    }
  }, [counter]);

  function copyEmailToClipboard() {
    navigator.clipboard.writeText(restData.acf.email);
    setCounter(5);
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
            {/* {counter > 0 ? <p onClick={copyEmailToClipboard()}>Copy Email</p> : <p>Email Copied</p>} */}

            <p onClick={copyEmailToClipboard}>Copy Email</p>
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
