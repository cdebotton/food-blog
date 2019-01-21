import React from 'react';
import { graphql, Link } from 'gatsby';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            path: string;
          };
        };
      }[];
    };
  };
};

function BlogIndex({ data }: Props) {
  return (
    <div>
      <h2>Blog index</h2>
      <ul>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li key={`POST_${index}`}>
              <Link to={`/blog/${edge.node.frontmatter.path}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
    allMarkdownRemark(limit: 100) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
