import React from 'react';
import { graphql } from 'gatsby';

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
    };
  };
};

function Blog({ data }: Props) {
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
    </div>
  );
}

export default Blog;

export const pageQuery = graphql`
  query {
    markdownRemark {
      frontmatter {
        title
      }
    }
  }
`;
