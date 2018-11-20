import React from "react";
import styled from "styled-components";
import Project from "./project";
import { StaticQuery, graphql } from "gatsby";

const Portfolio = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  flex-grow: 1;
`;

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              project: frontmatter {
                title
                description
                tags
                thumbnail
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Portfolio>
        {data.allMarkdownRemark.edges.map(({ node: { project } }, index) => (
          <Project key={index} project={project} />
        ))}
      </Portfolio>
    )}
  />
);
