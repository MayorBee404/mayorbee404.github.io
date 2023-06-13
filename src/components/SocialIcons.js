const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/mayorbee404">
        <i className="fa-brands fa-github" aria-hidden="true" title="Daninsyah Bagas Abiyansa' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.figma.com/@abiyans_">
        <i className="fa-brands fa-figma" aria-hidden="true" title="Daninsyah Bagas Abiyansa' Twitter Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/abiyans/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Daninsyah Bagas Abiyansa' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.youtube.com/@abiyans_">
        <i className="fa-brands fa-youtube" aria-hidden="true" title="Daninsyah Bagas Abiyansa' Instagram Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
