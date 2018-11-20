import React from "react";
import styled from "styled-components";
import { CenteredDiv } from "./basics";

const ProjectTitle = styled.p`
  margin: 0.5rem 0 0 0;
  padding: 0;
  flex-grow: 1;
  text-align: center;
  font-size: 1rem;
  font-family: "Abel", monospace;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-weight: bold;
`;

const ProjectSubtitle = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

const ProjectTechnologies = styled.p`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.3rem;
  max-width: 100%;
`;

const Thumbnail = styled(CenteredDiv)`
  position: relative;
  width: 100%;
  height: 10rem;
  overflow: hidden;
  :hover img {
    filter: grayscale(100%);
    opacity: 0.4;
  }
  :hover div {
    opacity: 1;
  }
`;

const ViewProject = styled(CenteredDiv)`
  padding: 1rem;
  font-size: 1.5rem;
  border: 0.5rem solid black;

  opacity: 0;
  transition: opacity 0.4s ease-out;

  font-family: "Abel", sans-serif;
  color: black;
  text-transform: uppercase;
  z-index: 2;
`;

const ThumbnailImg = styled.img`
  position: absolute;
  top: 0;
  width: 20rem;
  height: 10rem;
  display: block;
  transition: filter 0.4s ease-out, opacity 0.4s ease-out;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  text-align: center;
  min-width: 12rem;
  max-width: 20rem;

  transition: height 0.4s ease-out;
  flex-grow: 1;
  margin: 1rem 0.5rem 2rem 0.5rem;
  font-size: 1.5rem;
`;

export default ({ project }) => {
  const { title, description, tags, thumbnail } = project;
  return (
    <ThumbnailContainer>
      <Thumbnail>
        <ViewProject>View Project</ViewProject>
        <ThumbnailImg src={thumbnail} alt="" />
      </Thumbnail>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectSubtitle>{description}</ProjectSubtitle>
      <ProjectTechnologies>{tags}</ProjectTechnologies>
    </ThumbnailContainer>
  );
};

/* <div class="thumbnailContainer">
                    <div class="thumbnail">
                        <a href="https://ludem.github.io/jsclock/">
                            <img class="thumbnailImg" src="images/jsclock.gif">
                            <div class="viewProject">
                                <p>VIEW PROJECT</p>
                            </div>
                        </a>
                    </div>
                    <p class="projectTitle">Swiss Railway Clock</p>
                    <p class="projectSubtitle">CSS version of the iconic swiss clock</p>
                    <p class="projectTechnologies">HTML + CSS + JAVASCRIPT</p>
                </div> */
