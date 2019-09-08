import React from "react";
import styled from "@emotion/styled";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ to, children, external, ...rest }) => (
  external ? 
    <a href={to} {...rest} target="_blank" rel="noopener noreferrer">{children}</a> :
    <GatsbyLink to={to} {...rest}>{children}</GatsbyLink>
);

const StyledLink = styled(Link)`
  transition: ${p => p.theme.colorModeTransition};
  color: ${p => p.theme.colors.accent};

  &:visited {
    color: ${p => p.theme.colors.accent};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default StyledLink;