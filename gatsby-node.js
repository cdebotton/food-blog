const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'blog' });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  try {
    const BlogPost = path.resolve(`src/templates/BlogPost.tsx`);

    const { errors, data } = await graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `);

    if (errors) {
      throw errors;
    }

    data.allMarkdownRemark.edges.forEach(edge => {
      actions.createPage({
        path: `/blog/${edge.node.frontmatter.path}`,
        component: BlogPost,
      });
    });
  } catch (err) {
    console.error(err);
  }
};
