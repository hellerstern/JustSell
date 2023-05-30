import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import { DashboardContainer } from "../../../layout/layout";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { Header2 } from "../../../components/header/header2";
import { CStore } from "../../../components/store/CStore";

import { IMG_CLOSE1 } from "../../../config/images";

import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaRedditAlien } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { TbCopy } from 'react-icons/tb';


const Store = () => {

  const AppData = useContext(AppContext);

  return (
    <DashboardContainer>
      <Sidebar current='store'/>
      <Container>
        <Header2></Header2>
        <CStore></CStore>
      </Container>
      {
        AppData.delProd ? (
          <ConfirmDelProd>
            <div className="container">
              <p className="label1">Delete listing</p>
              <p className="label2">Are you sure?</p>
              <p className="label3">Once you delete a product it can not re-actived. All previous orders must have to be fulfilled.</p>

              <div>
                <button className="cancel" onClick={() => AppData.setDelProd(null)}>Cancel</button>
                <button className="confirm"onClick={() => AppData.setDelProd(null)}>Confirm</button>
              </div>
            </div>
          </ConfirmDelProd>
        ): <></>
      }
      {
        AppData.flagShareDiv ? (

          <ShareDiv>
            <div className="container">
              <h1 className="label1">
                Share your listing
              </h1>
              <p className="label2">
                Choose how you would like to share this
              </p>

              <div className="socials">
                <div>
                  <BsTwitter></BsTwitter>
                  Twitter
                </div>
                <div>
                  <FaFacebookF></FaFacebookF>
                  Facebook
                </div>
                <div>
                  <FaRedditAlien></FaRedditAlien>
                  Reddit
                </div>
                <div>
                  <ImWhatsapp></ImWhatsapp>
                  Whatsapp
                </div>
              </div>

              <div className="social-link">
                <input value={`https://example.com/article/social-share-modal`}></input>
                <TbCopy></TbCopy>
              </div>

              <img src={IMG_CLOSE1} className="close" onClick={() => AppData.setFlagShareDiv(null)}></img>
            </div>
          </ShareDiv>
        ) : <></>
      }
    </DashboardContainer>
  )
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: calc(100% - 250px);
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

const ConfirmDelProd = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    background: #262626;
    width: 900px;

    p {
      margin-left: 10px;
    }

    .label1 {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.32px;
      color: #C6C6C6;
      margin-top: 10px;
    }
    .label2 {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: #F4F4F4;
      margin-bottom: 20px;
    }
    .label3 {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.16px;
      color: #F4F4F4;
      margin-bottom: 30px;
    }
    div {
      display: flex;
      align-items: center;
      button {
        width: 50%;
        outline: none;
        border: none;
        cursor: pointer;

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.16px;
        padding: 20px;
      }

      .cancel {
        color: #FFFFFF;
        background: #6F6F6F;
      }
      .confirm {
        background: #EDAE49;
        color: #000000;
      }
    }
  }
`

const ShareDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: center;
  
  .container {
    position: relative;
    border-radius: 10px;
    background-color: white;
    padding: 30px;
    width: 464px;
    .label1 {
      font-family: 'Unbounded';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: #222222;
    }
    .label2 {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #888888;
      margin-top: 10px;
    }

    .socials {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        svg {
          color: #222222;
          font-size: 30px;
          margin-bottom: 30px;
        }

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #888888;
      }
    }

    .social-link {
      position: relative;
      margin-top: 20px;
      input {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        width: 100%;
        padding: 10px;
        color: #8D9CA5;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        
      }
      svg {
        position: absolute;
        top: 25%;
        right: 10px;
        font-size: 20px;
      }
    }

    .close {
      position: absolute;
      top: -10px;
      right: -10px;
      cursor: pointer;
    }
  }
`

export default Store;