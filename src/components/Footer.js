import CopyEmail from "./CopyEmail";

const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="site-footer">
      <ul>
        <li>
          <CopyEmail />
        </li>
        <li>
          <a href="https://linkedin.com/in/sam-screpnek-389927251" target="blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/samscrepnek" target="blank">
            Github
          </a>
        </li>

        {/* <p className="copyright">&copy;{getYear()}</p> */}
      </ul>
      <p>&copy;{getYear()} Sam Screpnek</p>
    </footer>
  );
};

export default Footer;
