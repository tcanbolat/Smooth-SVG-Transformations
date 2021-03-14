import React, { useState } from "react";
import Rotate from "react-reveal/Rotate";
import { Transition } from "react-transition-group";
import { avatarMessages } from "../../../assets/data/data-portfolio.json";

const AvatarMessages = ({appStarted}) => {
  const [embed1, setEmbed1] = useState();
  const [embed2, setEmbed2] = useState();
  const [embed3, setEmbed3] = useState();

  const messageTransitionStyles = {
    entering: { opacity: 1, backgroundColor: "white" },
    entered: { opacity: 0.9, backgroundColor: "#F8F8F8" },
  };

  const arrowTransitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 0 },
  };

  return avatarMessages.map((msgBlock, i) => {
    return (
      <Rotate
        key={i}
        top
        left
        when={appStarted}
        delay={msgBlock.delay}
        wait={msgBlock.delay + 850}
        onReveal={() => {
          if (i === 0) return setEmbed1(true);
          if (i === 1) return setEmbed2(true);
          if (i === 2) return setEmbed3(true);
          return null;
        }}
      >
        <div style={styles.messageContainer}>
          <Transition
            in={i === 0 ? embed1 : i === 1 ? embed2 : i === 2 ? embed3 : false}
            timeout={800}
            classNames="embed-message"
          >
            {(state) => (
              <div
                style={{
                  ...styles.arrow,
                  ...arrowTransitionStyles[state],
                  transform: msgBlock.transform,
                }}
              ></div>
            )}
          </Transition>
          <Transition
            in={i === 0 ? embed1 : i === 1 ? embed2 : i === 2 ? embed3 : false}
            timeout={800}
            classNames="embed-message"
          >
            {(state) => (
              <div
                id="avatar-message"
                style={{
                  ...styles.messageBlock,
                  ...messageTransitionStyles[state],
                }}
              >
                <p style={styles.font}>{msgBlock.message}</p>
              </div>
            )}
          </Transition>
        </div>
      </Rotate>
    );
  });
};

export default AvatarMessages;

const styles = {
  messageContainer: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    paddingBottom: 5,
  },
  arrow: {
    marginRight: 10,
    width: 0,
    height: 0,
    borderTop: "10px solid transparent",
    borderRight: "20px solid white",
    borderBottom: "10px solid transparent",
    borderRadius: 5,
    filter: "drop-shadow(1px 1px 1px rgba(0,0,0,.5))",
    transition: "opacity 1000ms ease-in-out",
  },
  messageBlock: {
    backgroundColor: "white",
    height: "95%",
    width: "50%",
    borderRadius: 6,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    transition: "background-color 1000ms linear, opacity 1000ms ease-in-out",
  },
  font: {
    fontFamily: "'Titillium Web', sans-serif",
  },
};
