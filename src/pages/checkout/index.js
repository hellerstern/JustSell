import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import { PRIVATE_URLS } from "../../config/config";
import { 
  IMG_POWDUR,
  IMG_PRODUCT_LABEL,
  IMG_APPLE_PAY,
  IMG_CVC_CARD,
} from "../../config/images";

const CheckOut = () => {
  return (
    <Wrapper>
      <Container>
        <LeftDiv>
          <div className="left-div-container">
            <div className="go-powdur">
              <Link to={PRIVATE_URLS.SEARCH}><FiArrowLeft></FiArrowLeft><img src={IMG_POWDUR}></img><p>Powdur</p></Link>
            </div>
            <div className="price">
              <p>Pay Powdur</p>
              <h1>$ 66.00</h1>
            </div>
            <div className="detais">
              <img src={IMG_PRODUCT_LABEL}></img>
              <div>
                <p>Product Name</p>
                <p>$60.00</p>
              </div>
            </div>
            <div className="price-details">
              <div>
                <p>Subtotal</p>
                <p>$66.00</p>
              </div>
              <div>
                <p>Service fee(10.0%)</p>
                <p>$6.00</p>
              </div>
              <div>
                <p>Total due</p>
                <p>$66.00</p>
              </div>
            </div>
          </div>

        </LeftDiv>
        <RightDiv>
          <ApplePayDiv>
            <Link>
              <img src={IMG_APPLE_PAY}></img>
            </Link>
          </ApplePayDiv>

          <p className="label1">Or pay with card</p>


          <p className="label2">Email</p>
          <input type="email" className="email-input"></input>

          <p className="label2" style={{margin: '10px 0'}}>Country or region</p>

          <CardRegion>
            <div className="numbers">
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
              <p>1234</p>
            </div>
            <div className="svgs">
              <svg width="30" height="20">
                <rect x="0" y="0" rx="2" ry="2" width="30" height="20" style={{fill:'#8792A2', opacity:0.5}} />
              </svg>
              <svg width="30" height="20">
                <rect x="0" y="0" rx="2" ry="2" width="30" height="20" style={{fill:'#8792A2', opacity:0.5}} />
              </svg>
              <svg width="30" height="20">
                <rect x="0" y="0" rx="2" ry="2" width="30" height="20" style={{fill:'#8792A2', opacity:0.5}} />
              </svg>
              <svg width="30" height="20">
                <rect x="0" y="0" rx="2" ry="2" width="30" height="20" style={{fill:'#8792A2', opacity:0.5}} />
              </svg>
            </div>
          </CardRegion>

          <CVCDiv>
            <div className="date-div">MM / YY</div>
            <div className="cvc-card">
              <p>CVC</p>
              <img src={IMG_CVC_CARD}></img>
            </div>
          </CVCDiv>

          <p className="label2">Name card</p>
          <input type="email" className="email-input"></input>

          <p className="label2" style={{margin: '10px 0'}}>Country or region</p>
          <select className="countries">
            <option>United States</option>
          </select>

          <div className="zip-code" style={{margin: '10px'}}>
            <p>ZIP</p>
            <input></input>
          </div>
        </RightDiv>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  background-color: white;
  padding: 20px 30px;
  overflow: scroll;
`

const Container = styled.div`
  margin: auto;
  max-width: ${p => p.theme.maxWidth };
  height: 100%;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const LeftDiv = styled.div`
  padding: 30px;
  height: 100%;
  width: 40%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 250px;
  }
  .left-div-container {
    display: flex;
    flex-direction: column;
    .go-powdur {
      a {
        display: flex;
        align-items: center;
        gap: 5px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        font-feature-settings: 'tnum' on, 'lnum' on;
        color: #1A1F36;
        text-decoration: none;
  
        svg {
          color: #8792A2;
          scale: 1.5;
        }
      }
    }
  
    .price {
      margin-top: 40px;
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        font-feature-settings: 'tnum' on, 'lnum' on;
        color: #697386;
      }
      h1 {
        margin-top: 10px;
        font-style: "Rubik";
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -0.02em;
        font-feature-settings: 'tnum' on, 'lnum' on;
        color: #1A1F36;
      }
    }
  
    .detais {
      flex: 1;
      display: flex;
      align-items: center;
      margin: 20px 0;
      div {
        padding: 10px;
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          font-feature-settings: 'tnum' on, 'lnum' on;
          color: #1A1F36;
        }
      }
    }
  
    .price-details {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          font-feature-settings: 'tnum' on, 'lnum' on;
          color: #1A1F36;
        }
      }
    }
  }

  .left-div-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 22px;
      letter-spacing: 0.015em;
      font-feature-settings: 'tnum' on, 'lnum' on;
      color: #8792A2;
      span {
        font-weight: 900;
      }
    }
    .right-div {
      padding-left: 50px;
      border-left: 2px solid #8792A2;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .left-div {
      padding-right: 50px;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
`

const RightDiv = styled.div`
  height: 100%;
  margin-top: 50px;

  .label1 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #8792A2;
  }

  .label2 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.005em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #697386;
  }

  .email-input {
    background: #FFFFFF;
    outline: 0;
    border: 1px solid rgba(60, 66, 87, 0.12);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    width: 100%;
    padding: 10px;
  }

  .countries {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.005em;
    color: #1A1F36;
    width: 100%;
    border: none;
    outline: none;
    margin: 0 10px;
  }

  .zip-code {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      align-items: center;
      letter-spacing: 0.005em;
      color: #8792A2;
    }
    input {
      padding: 10px;
      outline: 0;
      border: 0;
    }
  }
`

const ApplePayDiv = styled.div`
  width: 421px;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.12), 0px 2px 5px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  background: #000000;
  margin-bottom: 30px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }
`

const CardRegion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  div {
    padding: 10px 0;
  }
  .numbers {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      display: flex;
      align-items: center;
      letter-spacing: 0.005em;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #8792A2;
    }
  }

  .svgs {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

const CVCDiv = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    padding: 10px 0;
  }

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.005em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #8792A2;

  .date-div {
    width: 50%;
  }
  .cvc-card {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default CheckOut;
