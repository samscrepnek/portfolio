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

  return <button onClick={copyEmailToClipboard}>Email</button>;
};

export default CopyEmail;
