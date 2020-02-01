// Code modified from https://github.com/narative/narative.co/blob/master/src/components/Button/Button.tsx

import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core";

interface ButtonProps {
  text: string
  type?: "button" | "reset" | "submit"
  isSubmitting?: boolean
  disabled?: boolean
}

const Button = ({ text, type, isSubmitting, disabled }: ButtonProps) => (
  <StyledButton type={type || 'submit'} role="button" aria-label={text} disabled={disabled}>
    {isSubmitting ? <Spinner /> : text}
  </StyledButton>
)

export default Button

const blink = keyframes`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 20px;
  height: 20px;
`

const SpinnerDot = styled.span`
  position: relative;
  top: -13px;
  font-size: 5rem;
  line-height: 0;
  animation: ${blink} 1.4s infinite linear both;
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`

export const Spinner = () => (
  <SpinnerContainer>
    <SpinnerDot>.</SpinnerDot>
    <SpinnerDot>.</SpinnerDot>
    <SpinnerDot>.</SpinnerDot>
  </SpinnerContainer>
)

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.5rem;
  border: 1px solid #000;
  border-radius: 3px;
  background: #000;
  color: ${p => p.theme.colors.primary};
  font-weight: 500;
  font-size: 1.8rem;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
`