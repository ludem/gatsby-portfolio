import React from "react";
import styled from "styled-components";
import { CenteredDiv } from "./basics";

const Bio = styled(CenteredDiv)`
  justify-content: flex-start;
  margin-top: 12rem;
  padding-bottom: 1rem;
  padding-top: 8rem;
  position: relative;
  height: auto;
  flex-direction: column;
  background: silver;
`;

const Pic = styled.div`
  position: absolute;
  left: center;
  top: -7.5rem;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  background: url("images/biopic.jpg");
  background: #242424;
  border: 1px solid red;
  background-size: cover;
  background-position: top;
  margin-bottom: 2rem;
`;

const About = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 0.2rem;
  padding: 0;
`;

const Info = styled(CenteredDiv)`
  align-content: flex-start;
  width: 100%;
  padding: 0.5rem;
  * {
    flex: 1;
  }
`;

/*const Contacts = styled.i`
  transition: transform 0.3s ease-in-out;
  margin: 1rem;
  color: #242424;
  :hover {
    transform: scale(1.3);
  }
`;*/

export default () => (
  <Bio>
    <Pic />
    <About>About Me</About>
    <Info>
      <p>
        Luca is from Naples, Italy. He earned a bachelor's degree in Industrial
        Engineering at the University of Naples Federico II. Along with his
        study, he worked as a freelance web developer. In 2016, he moved to Rome
        where he worked as a consultant developer for Hewlett Packard
        Enterprise, dealing with back-end and front-end development. Since
        December 2017, he has worked for Capgemini Italia as front-end
        developer.
      </p>
      <ul>
        <li>
          <b>Certifications:</b>{" "}
          <a href="https://www.freecodecamp.org/ludem/front-end-certification">
            FreeCodeCamp's Front-End Development Program
          </a>
        </li>
        <li>
          <b>Languages:</b> Java, HTML 5.0, CSS/SASS, JavaScript/ECMAScript
        </li>
        <li>
          <b>Frameworks:</b> Angular 2 - 5.0
        </li>
        <li>
          <b>Techniques:</b> Responsive layout, UI animations, Web APIs, Ajax,
          RESTful Web services, Reactive Functional Programming
        </li>
        <li>
          <b>Software:</b> Intellij Idea, Visual Code Studio, HP UFT/QTP, Chrome
          Dev Tools, git, svn
        </li>
      </ul>
    </Info>
  </Bio>
);

/* <div id="bio">
<div class="pic">
</div>
<p class="projectTitle">About me</p>
<div class="info">
    <p>Luca is from Naples, Italy. He earned a bachelor's degree in Industrial Engineering at the University of
        Naples Federico II. Along with his study, he worked as a freelance web developer. In 2016, he moved to Rome where he worked as a consultant developer
        for Hewlett Packard Enterprise, dealing with back-end and front-end development.
        Since December 2017, he has worked for Capgemini Italia as front-end developer.</p>
    <ul>
        <li><b>Certifications:</b> <a href="https://www.freecodecamp.org/ludem/front-end-certification">FreeCodeCamp's Front-End Development Program</a></li>
        <li><b>Languages:</b> Java, HTML 5.0, CSS/SASS, JavaScript/ECMAScript</li>
        <li><b>Frameworks:</b> Angular 2 - 5.0</li>
        <li><b>Techniques:</b> Responsive layout, UI animations, Web APIs, Ajax, RESTful Web services, Reactive Functional Programming</li>
        <li><b>Software:</b> Intellij Idea, Visual Code Studio, HP UFT/QTP, Chrome Dev Tools, git, svn</li>
    </ul>
</div>
<div id="contacts">
    <p class="projectTitle">Contacts</p>
    <a href="mailto:luca.demil@gmail.com"><i class="fa fa-2x fa-envelope" aria-hidden="true"></i></a>
    <a href="https://github.com/ludem"><i class="fa fa-2x fa-github" aria-hidden="true"></i></a>
    <a href="https://codepen.io/ludem"><i class="fa fa-2x fa-codepen" aria-hidden="true"></i></a>
    <a href="https://www.freecodecamp.org/ludem"><i class="fa fa-2x fa-free-code-camp" aria-hidden="true"></i></a>
</div>
</div> */

/*** BIO & INFO ****/

/* #bio {
  margin-top: 12rem;
  padding-bottom: 1rem;
  padding-top: 8rem;
  position: relative;
  height: auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background: silver;
}

.pic {
  position: absolute;
  left: center;
  top: -7.5rem;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  background: #242424;
  background: url('images/biopic.jpg');
  background-size: cover;
  background-position: top;
  margin-bottom: 2rem;
}



.info > * {
  flex: 1;
}

.info > p {
}



#contacts i:hover {

} */
