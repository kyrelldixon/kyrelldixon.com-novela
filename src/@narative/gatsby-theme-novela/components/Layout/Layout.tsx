import React, { useState, useEffect } from "react";
import { ThemeProvider, useColorMode } from "theme-ui";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

import NavigationFooter from "@components/Navigation/Navigation.Footer";
import NavigationDesktop from "@components/Navigation/Navigation.Header";
import NavigationMobile from "../../../../components/Navigation/Navigation.Mobile.Header";
import ArticlesContextProvider from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List.Context";

import { globalStyles } from "@styles";
import theme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";
import colors from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui/colors";
import { scrollable } from "../../../../utils";

interface LayoutProps {
  children: React.ReactChild;
}

const navLinks = [
  { to: '/articles', text: 'Articles' },
  // { to: '/projects', text: 'Projects' },
  { to: '/contact', text: 'Contact' },
];

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
function Layout({ children }: LayoutProps) {
  const [colorMode] = useColorMode();
  const [active, setActive] = useState<boolean>(false);
  const [mobileNavOffset, setMobileNavOffset] = useState<number>(0);

  const MOBILE_NAV_DURATION = 500;
  const MOBILE_NAV_OFFSET = navLinks.length * 80 + 200;
  
  let finalTheme = theme;
  
  if (colorMode === "dark") {
    finalTheme = Object.assign({}, theme, { colors: colors.modes[colorMode] });
  }
  
  function toggleNav() {
    setActive(!active);
    setMobileNavOffset(MOBILE_NAV_OFFSET);
  }

  useEffect(() => {
    scrollable(active ? 'disable' : 'enable');
  }, [active]);

  return (
    <ThemeProvider theme={finalTheme}>
      <ArticlesContextProvider>
        <NavigationMobile active={active} navLinks={navLinks} />
        <Container
          mobileNavOffset={mobileNavOffset}
          mobileNavDuration={MOBILE_NAV_DURATION}
          active={active}
        >
          <Global styles={globalStyles} />
          <NavigationDesktop
            active={active}
            toggleNav={toggleNav}
            navLinks={navLinks}
          />
          {children}
          <NavigationFooter />
        </Container>
      </ArticlesContextProvider>
    </ThemeProvider>
  );
}

export default Layout;

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: ${p => p.theme.colorModeTransition};
  min-height: 100vh;

  &::after {
    content: '';
    position: absolute;
    top: ${p => (p.low ? '10px' : '-20px')};
    left: 0;
    width: 100%;
    height: 20px;
    background: ${p => (p.theme.colors.background)};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px -20px 40px rgba(0, 0, 0, 0.2);
  }
  &::before {
    content: '';
    position: absolute;
    top: ${p => (p.low ? '11px' : '-21px')};
    left: 0;
    right: 0;
    margin: 0 auto;
    width: calc(100vw - 40px);
    height: 1px;
    background: radial-gradient(
      174px at 50.14% 100.05%,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
  }

  @media screen and (max-width: 734px) {
    transform: ${p => p.active ? `translateY(${p.mobileNavOffset}px);` : 'none;'}
    transition: transform ${p => p.mobileNavDuration + 60}ms cubic-bezier(0.52, 0.16, 0.24, 1);
    width: 100vw;
    touch-action: ${p => (p.active ? 'none' : 'initial')};
  }
`;
