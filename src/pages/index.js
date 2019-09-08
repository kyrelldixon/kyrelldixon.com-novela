import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Link from "../components/Link";

const Home = () => (
  <Layout>
    <SEO pathname="/" />
    <HomeSection relative zIndex={1}>
      <HomeContainer>
        <HomeHeader>Hi! My name is Kyrell, but you can call me Kai.</HomeHeader>
        <HomeSubheader>
          I'm a full stack developer. I develop <Link to="/projects">software products</Link>, 
          <Link to="https://is.gd/O6qzK9" external> tutor</Link>,
          and <Link to="/articles">write</Link> about what I'm learning.
        </HomeSubheader>
      </HomeContainer>
    </HomeSection>
  </Layout>
);

const HomeSection = styled(Section)`
  position: ${p => p.relative ? 'relative' : 'fixed'};
  z-index: ${p => p.zIndex ? p.zIndex : "none"};
`;

const HomeContainer = styled.div`
  margin-top: 100px;
  width: 80%;

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HomeHeader = styled.h1`
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 30px;

  ${mediaqueries.tablet`
    font-size: 32px;
  `}
`;

const HomeSubheader = styled.h2`
  font-size: 30px;
  color: ${p => p.theme.colors.primary};
  opacity: 0.7;
  font-weight: 500;

  ${mediaqueries.tablet`
    font-size: 24px;
  `}
`;

export default Home;