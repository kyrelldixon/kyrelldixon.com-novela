import React from "react";
import styled from "@emotion/styled";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

import ArrowLink from "../components/ArrowLink";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <Section>
      <NotFoundContainer>
        <Headings.h1>404</Headings.h1>
        <Headings.h2>The page you are looking for, could not be found.</Headings.h2>
        <ArrowLink to="/" text="Go to Homepage" />
      </NotFoundContainer>
    </Section>
  </Layout>
);

export default NotFoundPage;

const NotFoundContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 240px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
