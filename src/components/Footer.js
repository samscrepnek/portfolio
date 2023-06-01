const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="site-footer">
      <p>Site made by Sam Screpnek.</p>
      <p className="copyright">&copy;{getYear()}</p>
    </footer>
  );
};

export default Footer;
