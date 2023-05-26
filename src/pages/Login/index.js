import { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../layout/layout";
import { IMG_BACK_01 } from "../../config/images";
import { Logo } from "../../components/logo/logo";
import { PUBLIC_URLS } from "../../config/config";
import { Input1 } from "../../components/input/input1";

const Login = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');


  return (
    <Container>
      <Wrapper back={IMG_BACK_01}>
        <PageHeader>
          <Logo str={'Just$ell'}></Logo>
          <Link to={PUBLIC_URLS.SIGNUP}>Sign Up</Link>
        </PageHeader>

        <LoginComponent>
          <LoginDiv>
            <p id="login-div-label">Sign in</p>
            <Input1 styleFlag={true} type={'text'} label={"EMAIL ADDRESS"} placeholder={'johndoe@example.com'} val={userEmail} setVal={setUserEmail}/> 
            <Input1 styleFlag={false} type={'password'} label={"Password"} placeholder={'*******'} val={userPass} setVal={setUserPass} />
            <Link className="forgot-password" to={PUBLIC_URLS.FORGETPASSWORD}> Forgot Password? </Link>

            <button>Continue</button>
          </LoginDiv>
        </LoginComponent>
      </Wrapper>
    </Container>
  )
}


const Wrapper = styled.div`
  background-image: url(${p => p.back});
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 0 33px;
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
  margin-bottom: 50px;
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

    margin-bottom: 100px;

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
    margin-top: 150px;
    @media screen and (max-width: 620px) {
      margin-top: 50px;
    }
  }

  .forgot-password {
    font-family: 'Zen Kaku Gothic Antique';
    text-align: right;
    float: right;
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
    text-align: right;
    text-decoration-line: underline;
    color: #616161;
  }
`

export default Login;
