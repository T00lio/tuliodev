import React from "react";
import "./Skills.css";
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
import tailwind from "../../assets/images/skill-icons/Tailwind.svg";
import sequelize from "../../assets/images/skill-icons/sequelize-svgrepo-com.svg";
import express from "../../assets/images/skill-icons/express.svg";
import jira from "../../assets/images/skill-icons/jira.svg";
import github from "../../assets/images/skill-icons/github.svg";

function Skills() {
  const skills = [
    {
      title: "FrontEnd",
      content: [
        Bootstrap,
        CSS,
        HTML,
        JavaScript,
        ReactSVG,
        MaterialUI,
        tailwind,
      ],
    },
    {
      title: "BackEnd",
      content: [node, pgsql, firebase, npm, sequelize, firebase, express],
    },
    {
      title: "Tools",
      content: [code, figma, slack, jira, github],
    },
  ];

  console.log(skills);

  return (
    <div className="skill-container">
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "col",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignItems: "start",
          padding: "1rem",
        }}
      >
        {skills.map((skillCategory, index) => (
          <li
            key={index}
            style={{
              margin: "0",
              padding: "0",
            }}
          >
            <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
              {skillCategory.title}
            </h2>
            <ul
              style={{ display: "flex", alignItems: "start", flexWrap: "wrap" }}
            >
              {skillCategory.content.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "1rem",
                    opacity: 4,
                  }}
                >
                  <img
                    src={skill}
                    className="skill-icon"
                    alt="skill"
                    style={{
                      margin: "2rem",
                      padding: "1rem",
                    }}
                  />
                </div>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
