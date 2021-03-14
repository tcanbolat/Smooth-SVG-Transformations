import React from "react";
import Avatar from "./components/Avatar/Avatar";
import Footer from "./components/Footer/Footer";

const height = window.innerHeight;

const App = () => {
  return (
    <div style={styles.appContainer}>
      <Avatar />
      <Footer />
    </div>
  );
};

export default App;

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
};
