import React, { ReactNode } from 'react';
import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components/macro';

type Props = {
  children: ReactNode;
};

const GlobalStyles = createGlobalStyle`
  ${normalize()};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
  }
`;

function Layout({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
export default Layout;
