import styled from "styled-components";
import { Link } from "react-router-dom";
import { Checkbox } from "carbon-components-react";
import { FiArrowLeft } from "react-icons/fi";

export const CCitySelector = () => {
  return (
    <Wrapper>
      <BackLink>
        <FiArrowLeft></FiArrowLeft>
        <p>Back</p>
      </BackLink>

      <h1 className="label1">Select your location</h1>

      <MainDiv>
        <LabelDiv>
          Select your town/city
        </LabelDiv>
        <OptionContainer>
          <StyledCheckbox labelText="Option" id="checked"></StyledCheckbox>
          <StyledCheckbox labelText="Option" id="checked1"></StyledCheckbox>
          <StyledCheckbox labelText="Option" id="checked2"></StyledCheckbox>
          <StyledCheckbox labelText="Option" id="checked3"></StyledCheckbox>
          <StyledCheckbox labelText="Option" id="checked4"></StyledCheckbox>
          <StyledCheckbox labelText="Option" id="checked5"></StyledCheckbox>
          <StyledCheckbox labelText="Option" id="checked6"></StyledCheckbox>
          <StyledCheckbox labelText="Option" id="checked7"></StyledCheckbox>
        </OptionContainer>
      </MainDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;

  .label1 {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: flex-end;
    color: #FAFAFA;
    margin-top: 40px;

    @media screen and (max-width: 600px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
`

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  svg {
    color: white;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
  }
`

const MainDiv = styled.div`
  background: #262626;
  width: 100%;
  margin-top: 10px;
`

const LabelDiv = styled.div`
  padding: 15px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #F4F4F4;
  box-shadow: inset 0px -1px 0px #393939;
`

const OptionContainer = styled.div`
  margin: 0 10px;
`

const StyledCheckbox = styled(Checkbox)`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #C6C6C6;
  padding: 10px;
  box-shadow: inset 0px -1px 0px #393939;
  label {
    &::before {
      border: 1px solid #E0E0E0 !important;
    }

    &::before {
      background-color: transparent !important;
    }
  }
`