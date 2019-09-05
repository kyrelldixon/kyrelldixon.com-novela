import React from "react";
import styled from "@emotion/styled";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const Hero = () => (
  <Section relative id="Projects__Hero">
    <HeadingContainer>
      <HeroHeading>Check out some of the projects I'm working on.</HeroHeading>
    </HeadingContainer>
  </Section>
)

const HeadingContainer = styled.div`
  margin: 100px 0;
  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.desktop`
    font-size: 38px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

export default Hero;