import React from "react"
import { useColorMode } from "theme-ui";

const Logo = () => {
  const [colorMode, ] = useColorMode();
  const isDark = colorMode === `dark`;
  
  return (
    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="Logo__Desktop">
      <path d="M17.5907 20.2954H0V23H17.5907V20.2954Z" fill={isDark ? "#fff" : "#000"}></path>
      <path d="M0 7.96484V18.9537L5.38796 15.1843V11.7343L0 7.96484Z" fill={isDark ? "#fff" : "#000"}></path>
      <path d="M17.5689 10.9463V0L12.1597 3.74815V7.13426L17.5689 10.9463Z" fill={isDark ? "#fff" : "#000"}></path>
      <path d="M17.5907 18.975L17.5694 12.288L0 0V6.62315L17.5907 18.975Z" fill={isDark ? "#fff" : "#000"}></path>
    </svg>
  )
}


export default Logo