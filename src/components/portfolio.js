import React from "react";
import styled from "styled-components";
import Project from "./project";

const projects = [
  {
    key: 0,
    title: "Prova",
    subtitle: "Provaprova",
    technologies: "jsjsjsjs"
  },
  {
    key: 1,
    title: "Progetto 2",
    subtitle: "Progetto",
    technologies: "HTML"
  }
];

const Portfolio = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  flex-grow: 1;
`;

export default () => (
  <Portfolio>
    {projects.map(project => (
      <Project key={project.key} project={project} />
    ))}
  </Portfolio>
);
