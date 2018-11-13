import React from "react";
import styled from "styled-components";

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

const ViewProject = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem;
  top: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  transition: opacity 0.4s ease-out;
  z-index: 2;
`;

const ThumbnailImg = styled.div`
  width: 20rem;
  height: 10rem;
  display: block;
  transition: filter 0.4s ease-out, opacity 0.4s ease-out;
  border: 1px solid red;
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  overflow: hidden;
  :hover {
    filter: grayscale(100%);
    opacity: 0.4;
  }
`;

/* .thumbnail:hover .thumbnailImg {
  filter: grayscale(100%);
  opacity: 0.4;
} */

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
  const { title, subtitle, technologies } = project;
  return (
    <ThumbnailContainer>
      <Thumbnail>
        <ThumbnailImg />
        <ViewProject />
      </Thumbnail>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectSubtitle>{subtitle}</ProjectSubtitle>
      <ProjectTechnologies>{technologies}</ProjectTechnologies>
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
