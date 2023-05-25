import styled from "styled-components";

export const Logo = ({ str }) => {
  return (
    <LogoWrapper> { str } </LogoWrapper>
  )
}

const LogoWrapper = styled.h1`
  font-family: 'Rubik';
  color: ${p => p.theme.fontColor2};
  font-size: 35px;
  font-weight:600;
`