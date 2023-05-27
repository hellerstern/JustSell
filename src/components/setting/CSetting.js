import styled from "styled-components";
import { IMG_ME } from "../../config/images";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export const CSetting = () => {

  const mydata = {
    avatar: IMG_ME,
    name: 'Darshan Zalavadiya',
    status: 2,
  }

  return (
    <Wrapper>
      <Container>
        <p className="title">Profile picture</p>
        <div className="container">
          <img src={mydata.avatar}></img>
        </div>

        <div className="container">
          <p>
            Username
          </p>

          <input placeholder="Input text"></input>
        </div>

        <div className="container">
          <p>Password</p>
          <input placeholder="Input text"></input>
        </div>

        <div className="container">
          <p>Email</p>
          <input placeholder="Input text"></input>
        </div>

        <NextLink to={'#'}> Next <FiArrowRight></FiArrowRight> </NextLink>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1;
  .title {
    font-style: 'Rubik';
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    margin-bottom: 10px;
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #767876; 
  }
  overflow-x: hidden;
  overflow-y: scroll;
`

const Container = styled.div`
  .container {
    margin-bottom: 30px;

    img {
      @media screen and (max-width: 400px) {
        width: 95%;
      }
    }
    p {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.32px;
      color: #C6C6C6;
      margin-bottom: 10px;
    }

    input {
      width: 560px;

      @media screen and (max-width: 700px) {
        width: 95%;
      }
      outline: 0;
      border: 0;
      background-blend-mode: multiply;
      background: #262626;
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.16px;
      color: white;
      padding: 15px;
      &::placeholder {
        color: #6F6F6F;
      }
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