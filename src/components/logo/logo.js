import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = ({ str }) => {
  return (
    <LogoWrapper to={'/'}> { str } </LogoWrapper>
  )
}

const LogoWrapper = styled(Link)`
  font-family: 'Rubik' !important;
  color: ${p => p.theme.fontColor2} !important;
  border: none !important;
  font-size: 35px;
  font-weight:600;
  text-decoration: none;
`