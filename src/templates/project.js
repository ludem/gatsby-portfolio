import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import { CenteredDiv } from "../components/basics";

const Content = styled(CenteredDiv)`
  margin-top: 10rem;
  font-size: 2rem;
  flex-direction: column;
  border: 1px solid red;
`;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        tags
        thumbnail
        link
      }
    }
  }
`;

export default ({ data }) => {
  const {
    title,
    description,
    tags,
    thumbnail,
    link
  } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Content>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </Content>
    </Layout>
  );
};
