import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { PUBLIC_URLS } from "../../config/config";

const Accode = () => {
  return (
    <Wrapper>
      <Container>
        <h1 className="title">This post requires an access code</h1>
        <p className="inform">Ask the seller to share that access code with you</p>

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
        </CodeDiv>

        <NextLink to={'#'}> Next <FiArrowRight></FiArrowRight> </NextLink>

        <CreateLink to={PUBLIC_URLS.SIGNUP}> CREATE AN ACCOUNT </CreateLink>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  margin: 10px;
  .title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.15px;
    color: rgba(255, 255, 255, 0.87);
  }
  .inform {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.15px;
    color: rgba(255, 255, 255, 0.87);
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

const CreateLink = styled(Link)`
  text-decoration: none;
  margin: auto;

  color: white;
  background-color: black;
  border-radius: 4px;
  padding: 8px 22px;
  margin-top: 80px;

  font-family: 'Roboto';
  font-size: 16px;
  line-height: 26px;
  width: 350px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const CodeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 20px 0 30px 0;

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

export default Accode;