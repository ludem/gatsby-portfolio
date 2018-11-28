import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

const Content = styled.div`
  margin-top: 10rem;
  font-size: 2rem;
`;

export default ({ data }) => {
  const project = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Content>{project.title}</Content>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;
