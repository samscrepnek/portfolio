import { useState } from "react";

const CopyEmail = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  function copyEmailToClipboard() {
    navigator.clipboard.writeText("samscrepnek@gmail.com");
    setEmailCopied(true);
    function copyEmailTimer() {
      let myInterval = setInterval(resetEmailCopied, 1500);
      function resetEmailCopied() {
        setEmailCopied(false);
        return clearInterval(myInterval);
      }
    }
    copyEmailTimer();
  }

  return (
    <button aria-label="Copy email" onClick={copyEmailToClipboard} className="email-btn">
      {!emailCopied ? (
        <svg aria-hidden="true" focusable="false" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width="25" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="m6 18v3c0 .621.52 1 1 1h14c.478 0 1-.379 1-1v-14c0-.478-.379-1-1-1h-3v-3c0-.478-.379-1-1-1h-14c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1zm10.5-12h-9.5c-.62 0-1 .519-1 1v9.5h-2.5v-13h13z" fillRule="nonzero" />
        </svg>
      ) : (
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" />
        </svg>
      )}
      {!emailCopied ? "Copy Email" : "Email Copied"}
    </button>
  );
};

export default CopyEmail;
