import styled from "styled-components";
import { Link } from "react-router-dom";
import { DashboardContainer } from "../../../layout/layout";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { Header2 } from "../../../components/header/header2";
import { FiArrowLeft } from 'react-icons/fi';
import { PRIVATE_URLS } from "../../../config/config";

const H1_5 = () => {
  return (
    <DashboardContainer>
      <Sidebar current='orders'></Sidebar>
      <Container>
        <Header2></Header2>
        <CH1_5>
          <GoBack to={PRIVATE_URLS.ORDERS}><FiArrowLeft></FiArrowLeft>Back</GoBack>
          <div className="container">
            <CodeDiv>
              <div>
                <Code maxLength={1} placeholder="0"></Code>
                <Code maxLength={1} placeholder="0"></Code>
                <Code maxLength={1} placeholder="0"></Code>
              </div>
              <div>
                <Code maxLength={1} placeholder="0"></Code>
                <Code maxLength={1} placeholder="0"></Code>
                <Code maxLength={1} placeholder="0"></Code>
              </div>
              <p className="hi5">Hi-5 code</p>
            </CodeDiv>
            <p className="inform">When your service is complete, share this code with your service provider. This transfers your payment to them. 
              After you transfer the payment you will not be able to request an instant refund. </p>
          </div>
        </CH1_5>
      </Container>
    </DashboardContainer>
  )
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: calc(100% - 250px);

  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 900px) {
    width: calc(100% - 80px);
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 0px);
  }
  float: right;
  padding: 20px;

  & > div:nth-child(1) {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }
  & > div:nth-child(2) {
    /* display: none; */
  }
`

const CH1_5 = styled.div`
  height: 100%;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .hi5 {
      
    }
    .inform {
      font-family: 'Roboto';
      text-align: center;
      width: 80%;
      font-weight: 400;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: 0.15px;
      color: rgba(255, 255, 255, 0.87);
    }
  }
`

const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  svg {
    color: white;
  }
`

const CodeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 20px 0 30px 0;
  position: relative;

  p {
    position: absolute;
    bottom: -20px;
    left: 0;

    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #667085;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 700px) {
      justify-content: space-between;
    }
    gap: 12px;
  }
`

const Code = styled.input`
  border: 0;
  outline: 0;
  background: #F9FAFB;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 120%;

  text-align: center;
  letter-spacing: -0.02em;
  width: 80px;
  height: 80px;
  color: block;
  &::placeholder {
    color: #D0D5DD;
  }
`

export default H1_5;