import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from "gatsby";

import SocialLinks from '@narative/gatsby-theme-novela/src/components/SocialLinks';
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const siteQuery = graphql `
  {
    allSite {
      edges {
        node {
          siteMetadata {
            social {
              name
              url
            }
          }
        }
      }
    }
  }
`;

const NavigationMobile = ({ active, navLinks }) => {
  const isActive = active ? active : undefined;
  const results = useStaticQuery(siteQuery);
  const { social } = results.allSite.edges[0].node.siteMetadata;

  return (
    <Frame active={isActive}>
      <SocialIconsHeader active={isActive}>
        <SocialLinks links={social} fill="#fff" />
      </SocialIconsHeader>
      <HorizontalRule active={isActive} />
      <MobileLinks active={isActive}>
        {navLinks.map((link, index) => (
          <StyledLink
            active={isActive}
            key={link.to}
            index={index}
            to={link.to}
            getProps={({ isPartiallyCurrent }) =>
              // eslint-disable-next-line
              isPartiallyCurrent ? { ['data-active']: 'true' } : null
            }
          >
            {link.text}
          </StyledLink>
        ))}
      </MobileLinks>
    </Frame>
  )
}

export default NavigationMobile;

const Frame = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 0;
  padding: 80px 0;
  height: 100vh;
  background: ${p => (p.active ? '#1d2128' : '#08080b')};
  transition: background 0s ${p => (p.active ? '0' : '0.5s')};
  @media screen and (max-height: 734px) {
    padding: 40px 0;
  }
`;

const SocialIconsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  opacity: ${p => (p.active ? 1 : 0)};
  transform: translateY(${p => (p.active ? 0 : -12)}px);
  transition: all 0.5s var(--ease-out-quad) 100ms;
  ${mediaqueries.tablet`
  
    margin-bottom: 40px;
  `}
`;

const HorizontalRule = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
  margin: 0 40px 65px;
  opacity: ${p => (p.active ? 1 : 0)};
  transform: scaleX(${p => (p.active ? 1 : 0.6)});
  transition: transform 0.5s var(--ease-out-quad), opacity 0.4s ease-out;
  ${mediaqueries.tablet`
    margin: 0 40px 25px;
  `}
`;

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  position: relative;
  font-size: 22px;
  color: #fff;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  opacity: ${p => (p.active ? 1 : 0)};
  transform: translateY(${p => (p.active ? 0 : -10)}px);
  transition: all 0.5s cubic-bezier(0.32, 0.08, 0.24, 1)
    ${p => p.index * 28 + 175}ms;
  &[data-active='true'] {
    color: #73737d;
  }
  padding: 15px;
  margin-bottom: 5px;
  ${mediaqueries.tablet`
    margin-bottom: 0;
  `}
`;