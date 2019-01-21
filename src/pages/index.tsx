import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { Link } from 'gatsby';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Link to="/blog">Blog</Link>
    </Layout>
  );
}

export default IndexPage;
