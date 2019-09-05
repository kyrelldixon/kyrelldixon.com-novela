import React from 'react';
import styled from "@emotion/styled";
import { Link } from "gatsby";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const NavItems = ({ navLinks }) => (
  <DesktopNavList>
    {
      navLinks.map(nav => (
        <NavItem key={nav.to}>
          <NavAnchor 
            to={nav.to}
            data-a11y="false"
            getProps={({ isPartiallyCurrent }) => (
              // eslint-disable-next-line
              isPartiallyCurrent ? { ['data-active']: 'true' } : null
            )}
          >
            {nav.text}
          </NavAnchor>
        </NavItem>
      ))
    }
  </DesktopNavList>
);

const DesktopNavList = styled.ul `
  list-style: none;
  ${mediaqueries.tablet`
    display: none;
  `};
`;

const NavItem = styled.li `
  display: inline-block;
  margin-right: 50px;
  &:last-child {
    margin-right: 0;
  }
  ${mediaqueries.tablet`
    margin-right: 40px;
    &:first-of-type {
      display: none;
    }
    &:last-child {
      margin-right: 30px;
    }
  `};
  ${mediaqueries.phablet`
    display: block;
    margin: 0 auto;
    &:first-of-type {
      display: block;
    }
    &:last-child {
      margin: 0 auto;
    }
  `};
`;
const NavAnchor = styled(Link)`
	display: flex;
  height: 40px;
  align-items: center;
  color: ${p => p.theme.colors.primary};
  font-weight: 600;
  font-size: 18px;
  &:hover {
    opacity: ${p => (p.disabled ? 0.15 : 0.6)};
  }
  &:focus {
    outline: none;
  }
  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -25%;
    top: 2%;
    width: 150%;
    height: 100%;
    border: 2px solid ${p => p.theme.colors.purple};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
  ${mediaqueries.phablet`
    display: none;
  `};
`;

export default NavItems;