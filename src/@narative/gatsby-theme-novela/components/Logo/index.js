import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "theme-ui";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

import logo from '../../../../assets/kd6 logo-blue-gradient-light.png';
import logoDark from '../../../../assets/kd6 logo-blue-gradient-dark.png';

const Logo = () => {
  const [colorMode, ] = useColorMode();
  const isDark = colorMode === `dark`;
  
  return (
    <div>
      <Img src={isDark ? logoDark : logo} />
    </div>
  )
}

const Img = styled.img`
  width: 200px;

  ${mediaqueries.phablet`
    width: 150px;
  `}
`;

export default Logo