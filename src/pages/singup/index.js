import { useState } from 'react';
import { RadioButtonGroup, RadioButton, Checkbox } from 'carbon-components-react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../layout/layout";
import { IMG_BACK_01 } from "../../config/images";
import { Logo } from "../../components/logo/logo";
import { PUBLIC_URLS } from "../../config/config";
import { Input1 } from "../../components/input/input1";

const SingUp = () => {


  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');


  return (
    <Container>
      <Wrapper back={IMG_BACK_01}>
        <PageHeader>
          <Logo str={'Just$ell'}></Logo>
          <Link to={PUBLIC_URLS.LOGIN}>Sign In</Link>
        </PageHeader>

        <LoginComponent>
          <LoginDiv>
            <p id="login-div-label">Sign Up</p>

            <StyledRadioButtonGroup
              defaultSelected={1}
            >
              <StyledRadioButton
                value={1}
                labelText="Seller"
              />
              <StyledRadioButton
                labelText="Buyer"
                value={2}
              />
            </StyledRadioButtonGroup>

            <Input1 styleFlag={true} type={'text'} label={"USER NAME"} placeholder={'John'} val={userName} setVal={setUserName}/> 
            <Input1 styleFlag={true} type={'text'} label={"EMAIL ADDRESS"} placeholder={'johndoe@example.com'} val={userEmail} setVal={setUserEmail}/> 
            <Input1 styleFlag={false} type={'password'} label={"Password"} placeholder={'*******'} val={userPass} setVal={setUserPass} />

            <StyledCheckbox labelText="I agree to the Terms of Service and Privacy Policy" id="checked" />
            
            <button>Continue</button>
          </LoginDiv>
        </LoginComponent>
      </Wrapper>
    </Container>
  )
}


const Wrapper = styled.div`
  background-image: url(${p => p.back});
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 0 33px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 500px) {
    padding: 0 15px;
  }
`

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-family: 'Zen Kaku Gothic Antique';
    text-decoration: none;
    color: ${p => p.theme.fontColor1};
    border: 1px solid ${p => p.theme.fontColor1};
    padding: 13px 40px;

    @media screen and (max-width: 425px) {
      padding: 13px 20px;
    }
  }
  padding: 30px 0;
`

const LoginComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginDiv = styled.div`
  padding: 40px 95px;
  background-color: ${p => p.theme.bgColor1};

  @media screen and (max-width: 620px) {
    padding: 40px 30px;
    width: 100%;
  }

  #login-div-label {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 700;
    font-size: 31px;
    line-height: 38px;
    text-align: center;
    color: ${p => p.theme.fontColor2};

    @media screen and (max-width: 620px) {
      margin-bottom: 50px;
    }
  }

  button {
    color: black;
    background: #EDAE49;
    padding: 18px 0;
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }
`

const StyledRadioButtonGroup = styled(RadioButtonGroup)`
  margin: 46px 0 35px 0;
  display: flex;
  align-items: center;
`

const StyledRadioButton = styled(RadioButton)`
  color: white;
  span {
    color: white;

    &::before {
      background-color: white !important;
    }
  }

  .cds--radio-button__appearance {
    border-color: white !important;
  }
`

const StyledCheckbox = styled(Checkbox)`
  color: #E0E0E0;

  label {
    &::before {
      border: 1px solid #E0E0E0 !important;
    }

    &::before {
      background-color: transparent !important;
    }
  }

  margin-top: 50px;
  @media screen and (max-width: 620px) {
    margin-top: 20px;
  }
`

export default SingUp;
