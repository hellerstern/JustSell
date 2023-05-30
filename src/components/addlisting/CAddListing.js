import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { PRIVATE_URLS } from "../../config/config";

export const CAddListing = () => {

  const navigate = useNavigate();
  const [price, setPrice] = useState(100);

  return (
    <Wrapper>
      <h1 className="label1">Add listing</h1>

      <div className="uploadar-container">
        <Uploadar></Uploadar>
        <Uploadar></Uploadar>
        <Uploadar></Uploadar>
      </div>

      <div className="input-container">
        <p>
          Title
        </p>
        <input placeholder="Input text" />
      </div>

      <div className="input-container">
        <p>
          Short description
        </p>
        <input placeholder="Input text" />
      </div>

      <div className="input-container">
        <p>
          Description
        </p>
        <textarea placeholder="Input text" />
      </div>

      <div className="control">
        <p className="title">
          Price
        </p>

        <div className="control-div">
          <div className="price">
            <h1>${price}</h1>

            <div>
              <p onClick={() => setPrice(price-1)}>-</p>
              <p onClick={() => setPrice(price+1)}>+</p>
            </div>
          </div>

          <div className="post" onClick={() => navigate(PRIVATE_URLS.CITYSELECTOR)}>
            <h1>Post</h1>
            <FiArrowRight></FiArrowRight>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 30px;
  width: 710px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  .label1 {
    display: flex;
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: flex-end;
    color: #FAFAFA;
  }

  .uploadar-container {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-top: 40px;

    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }

  .input-container {
    margin-top: 20px;
    p {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.32px;
      color: #C6C6C6;
    }
    input, textarea {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      color: white;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.16px;
      padding: 15px;
      outline: 0;
      border: 0;
      
      background: #262626;
      box-shadow: inset 0px -1px 0px #6F6F6F;
      width: 100%;
      margin-top: 5px;
      
      &::placeholder {
        color: #6F6F6F;
      }
    }
    textarea {
      height: 150px;
    }
  }

  .control {
    .title {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.32px;
      color: #C6C6C6;
    }
    .control-div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price {
        background: #262626;
        box-shadow: inset 0px -1px 0px #6F6F6F;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        width: 40%;
        div {
          display: flex;
          align-items: center;
          p:nth-child(1) {
            border-right: 1px solid #393939;
          }
          p {
            font-size: 20px;
            padding: 0 10px;
            cursor: pointer;
          }
        }
        h1, p {
          font-family: 'IBM Plex Mono';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.32px;
          color: #F4F4F4;
        }

      }

      .post {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        width: 40%;
        background: #EDAE49;
        h1 {
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.16px;
          color: #000000;
        }
      }
    }
  }
`

const Uploadar = styled.div`
  width: 215px;
  height: 233px;
  background: rgba(0, 128, 220, 0.08);
  border: 2px dashed #0080DC;
  border-radius: 24px;
  cursor: pointer;
`