import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
  );
}

export default IndexPage;
