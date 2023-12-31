import React from "react";
import Bootstrap from "../../assets/images/skill-icons/bootstrap.svg";
import CSS from "../../assets/images/skill-icons/css.svg";

import HTML from "../../assets/images/skill-icons/html.svg";
import JavaScript from "../../assets/images/skill-icons/javascript.svg";
import ReactSVG from "../../assets/images/skill-icons/react.svg";
import MaterialUI from "../../assets/images/skill-icons/material-ui.svg";
import code from "../../assets/images/skill-icons/code.svg";
import figma from "../../assets/images/skill-icons/figma.svg";
import firebase from "../../assets/images/skill-icons/firebase.svg";
import node from "../../assets/images/skill-icons/node.svg";
import npm from "../../assets/images/skill-icons/npm.svg";
import pgsql from "../../assets/images/skill-icons/pgsql.svg";
import slack from "../../assets/images/skill-icons/slack.svg";

function Skills() {
  const skills = [
    Bootstrap,
    CSS,
    HTML,
    JavaScript,
    ReactSVG,
    MaterialUI,
    slack,
    code,
    figma,
    firebase,
    node,
    npm,
    pgsql,
  ];
  return (
    <div className="skill-container">
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {skills.map((skill, index) => (
          <li style={{ margin: "0", padding: "0" }}>
            <img
              src={skill}
              className="skill-icon"
              alt="skill"
              key={index}
              style={{ height: "85px", width: "auto", margin: "0.75rem" }}
            />
          </li>
        ))}
      </ul>
      <style>
        {`
          @media (max-width: 768px) {
            .skill-icon {
              max-width: 1rem;
              height: 85px;
              width: auto;
            }
            li {
              margin: 0.75rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Skills;
