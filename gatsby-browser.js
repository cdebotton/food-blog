import { setConfig } from 'react-hot-loader';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

if (process.env.NODE_ENV !== 'production') {
  setConfig({ pureSFC: true });
}
