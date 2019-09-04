import React from 'react';
import styled from "@emotion/styled";
import { Link } from "gatsby";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const navLinks = [
  { to: '/projects', text: 'Projects' },
  { to: '/', text: 'Articles' },
];

const NavItems = () => (
  <NavList>
    {
      navLinks.map(navLink => (
        <NavItem>
          <NavAnchor to={navLink.to}>{navLink.text}</NavAnchor>
        </NavItem>
      ))
    }
  </NavList>
);

const NavList = styled.ul `
  list-style: outside none none;
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
	pointer-events: initial;
	opacity: 1;
`;

export default NavItems;