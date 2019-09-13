import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "theme-ui";

import logo from '../../../../assets/kd6 logo.svg';

const Logo = () => {
  const [colorMode, ] = useColorMode();
  const isDark = colorMode === `dark`;
  
  return (
    <div>
      <Img src={logo} />
    </div>
  )
}

const Img = styled.img`
  width: 200px;
`;

export default Logo