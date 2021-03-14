import React from "react";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <p>
            Smooth SVG Transformations{" "}
            <a
              href="https://github.com/tcanbolat/Smooth-SVG-Transformations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-code" style={{ fontSize: 20 }}></i>
            </a>
          </p>
          <p>
            <a
              href="https://portfolio-bf7ad.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abdullah Canbolat
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/abdullah-canbolat-6ab794109/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fab fa-linkedin-in"
                style={{ color: "#0e76a8", fontSize: 20, marginRight: 8 }}
              ></i>
              Tcanbolat
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/abdullah-canbolat-6ab794109/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fab fa-github"
                style={{ color: "black", fontSize: 20, marginRight: 8 }}
              ></i>
              Tcanbolat
            </a>
          </p>
        </div>
      </div>
      <div style={styles.cardContainer}>
        <div
          style={{
            ...styles.card,
            ...{ color: window.innerWidth > 1100 ? "white" : "black" },
          }}
        >
          <p>
            Avatar created using:{" "}
            <a
              href="https://apps.apple.com/us/app/my-avatar-avatar-creator/id1469187586"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Avatar
            </a>
          </p>
          <p>
            Then vectorized from png to svg to create individual path elements
            for each part of the face.
          </p>
          <p>
            Elements are inserted into a json object and then mapped onto the
            DOM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  card: {
    backgroundColor: "white",
    maxWidth: 350,
    minWidth: 350,
    height: 150,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "linear-gradient(to bottom right, #FFFFFF28, #FFFFFA)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    borderBottom: "1px solid #ff072628",
    borderRight: "1px solid #ff072628",
    display: "table",
  },
  cardContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginBottom: 10,
  },
};
