import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { useColorMode } from "theme-ui";
import { Link } from "gatsby";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

/**
 * From https://github.com/narative/narative.co/blob/master/src/components/Button/Button.Arrow.tsx
 */
export default ({
  to,
  onClick,
  text,
}) => (
  <ArrowButton
    to={to}
    data-a11y="false"
  >
    <ArrowAnimation>
      {text}
      <ArrowRightIcon aria-hidden="true" />
    </ArrowAnimation>
  </ArrowButton>
)

const ArrowButton = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 600;
  color: ${p => p.theme.colors.primary};
  background: transparent;
  height: 25px;
  max-width: 220px;
  ${mediaqueries.tablet`
    flex-direction: column;
  `};
  svg {
    position: relative;
    margin-left: 10px;
    top: 1px;
    transition: transform 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
  }
  &:focus svg {
    transform: translateX(3rem);
  }
  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: -50%;
    width: 120%;
    height: 200%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`

ArrowButton.defaultProps = {
  text: '',
}

const animateButtonLine = keyframes`
  0% {
      width: 0;
  }
  50% {
      width: 70%;
  }
  100% {
      width: 70%;
      left: 100%;
  }
`

const fadeInOut = keyframes`
  0% {
      opacity: 0;
      width: 0;
  }
  50% { opacity: 1; width: 40%}
  60% { opacity: 1; width: 70%}
  80% {
    opacity: 0;
    width: 50%;
    left: 100%;
  }
`

const ArrowAnimation = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  padding: 0 3rem 0 0;
  height: 25px;
  font-size: 1.8rem;
  ${mediaqueries.tablet`
    padding: 0rem 3rem 0 0rem;
  `};
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 13px;
    height: 1px;
    width: 0;
    background: ${p => p.theme.colors.primary};
    opacity: 0;
    z-index: 100;
  }
  svg {
    transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);
  }
  &:hover svg {
    transform: translateX(3rem);
  }
  &:hover span::after {
    animation: ${fadeInOut} 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }
  &:hover::after {
    opacity: 1;
    animation: ${animateButtonLine} 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    ${mediaqueries.tablet`
      animation: none;
    `};
  }
`

export const ArrowRightIcon = () => {
  const [colorMode, ] = useColorMode();
  const isDark = colorMode === `dark`;

  const fill = isDark ? '#fff' : '#000';
  return (
    <svg width="35" height="7" viewBox="0 0 35 7" version="1.1">
      <g fill="none">
        <g>
          <path
            d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z"
            transform="matrix(0 1 -1 0 35 0)"
            fill={fill}
          />
          <line
            y1="-0.5"
            x2="30"
            y2="-0.5"
            transform="translate(0 4)"
            stroke={fill}
          />
        </g>
      </g>
    </svg>
  )
}
