import React, { useState } from "react";
import { ThemeProvider, useColorMode } from "theme-ui";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";

import NavigationFooter from "@components/Navigation/Navigation.Footer";
import NavigationDesktop from "../Navigation/Navigation.Header";
import NavigationMobile from "../../../../components/Navigation/Navigation.Mobile.Header";
import ArticlesContextProvider from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List.Context";

import { globalStyles } from "@styles";
import theme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";
import colors from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui/colors";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

interface LayoutProps {
  children: React.ReactChild;
}

const navLinks = [
  { to: '/projects', text: 'Projects' },
  { to: '/', text: 'Articles' },
];

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
function Layout({ children }: LayoutProps) {
  const [colorMode] = useColorMode();
  const [active, setActive] = useState<boolean>(false);

  function toggleNav() {
    setActive(!active);
  }

  let finalTheme = theme;

  if (colorMode === "dark") {
    finalTheme = Object.assign({}, theme, { colors: colors.modes[colorMode] });
  }

  return (
    <ThemeProvider theme={finalTheme}>
      <ArticlesContextProvider>
        <Container>
          <Global styles={globalStyles} />
          <NavigationMobile active={active} navLinks={navLinks} />
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
`;
