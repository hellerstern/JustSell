import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextInput } from "carbon-components-react";
import {FiArrowRight} from 'react-icons/fi'
import { Container } from "../../layout/layout";
import { Footer2 } from "../../components/footer/footer2";
import { PUBLIC_URLS } from "../../config/config";

const ResetPassword = () => {
  return (  
    <Container>
      <Wrapper>

        <MainDiv>
          <p className="label1">Reset your passowrd</p>
          <p className="label2">Type in your password</p>

          <TextInput type='password' placeholder="New Password *"></TextInput>
          <TextInput type='password' placeholder="Retry new password *"></TextInput>

          <div className="next-link">
            <NextLink to={PUBLIC_URLS.RESETPERMIT}> Next <FiArrowRight></FiArrowRight> </NextLink>
          </div>

          <div className="back-to-login">
            <Link to={PUBLIC_URLS.LOGIN}>BACK TO LOGIN</Link>
          </div>
        </MainDiv>

        <Footer2 />
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  
  position: relative;
`

const MainDiv = styled.div`
  padding: 0 20px;
  p {
    color: rgba(255, 255, 255, 0.87);
  }

  .label1 {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 160%;
    letter-spacing: 0.15px;
    margin-bottom: 10px;

    @media screen and (max-width: 400px) {
      font-size: 20px;
    }
  }

  .label2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 143%;
    letter-spacing: 0.15px;

    margin-bottom: 50px;
  }

  input {

    background-color: transparent;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    color: white;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 25px 16px;

    width: 345px;

    @media screen and (max-width: 400px){
      width: 100%;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      outline: none;
    }
    margin-top: 20px;
  }

  .next-link {
    margin-top: 30px;
  }

  .back-to-login {
    a {
      text-decoration: none;
      color: white;
      background-color: #000000;
      border-radius: 4px;
      padding: 8px 22px;
      margin-top: 30px;

      font-family: 'Roboto';
      font-size: 16px;
      line-height: 26px;
      width: 100%;


      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }


`

const NextLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: #EDAE49;
  border-radius: 4px;
  padding: 8px 22px;
  margin-top: 30px;

  font-family: 'Roboto';
  font-size: 16px;
  line-height: 26px;
  width: 110px;


  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export default ResetPassword;