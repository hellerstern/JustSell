import styled from "styled-components";
import { Link } from "react-router-dom";
import { TbPointFilled } from 'react-icons/tb';

export const Footer2 = () => {
  return (
    <Wrapper>
      <Container>
        <Link>Terms and conditions</Link>

        <TbPointFilled></TbPointFilled>

        <Link>Privacy policy</Link>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px 0;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.15px;
    color: rgba(255, 255, 255, 0.87);
    text-decoration: none;
    white-space: nowrap;
  }

  svg {
    color: white
  }

  @media screen and (max-width: 425px) {
    svg {
      display: none;
    }
  }
`