import React from "react";
import styled from "@emotion/styled";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ to, children, external, ...rest }) => (
  external ? 
    <a href={to} {...rest} target="_blank" rel="noopener noreferrer">{children}</a> :
    <GatsbyLink to={to} {...rest}>{children}</GatsbyLink>
);

const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.accent};
  background: ${p => p.theme.colors.accent};
  background-image: ${p => p.theme.colors.linearGradient};
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:visited {
    color: ${p => p.theme.colors.accent};
  }

  &:hover {
    animation: ${p => p.animate ? `shine 1s linear infinite` : 'none'};
    text-decoration: underline;
  }

  /* Animation from https://codepen.io/shshaw/pen/YpERQQ */
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export default StyledLink;