import { useState, useContext } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {
  IMG_RPODUCT_1,
  IMG_CLOSE,
} from "../../config/images";
import { VscLocation } from 'react-icons/vsc';
import { TbShare3 } from 'react-icons/tb';
import { AppContext } from '../../context/context';
import { PRIVATE_URLS } from '../../config/config';

export const CStore = () => {

  const [sltProduct, setSltProduct] = useState(null);

  const AppData = useContext(AppContext);

  const products = [
    {
      id: 1,
      title: 'Product Title',
      desc: `There’s nothing I really wanted to do in life that I wasn’t able to get good at.`,
      price: 520,
      region: 'San Antonio, Texas',
      img: IMG_RPODUCT_1,
    },
    {
      id: 2,
      title: 'Product Title',
      desc: `There’s nothing I really wanted to do in life that I wasn’t able to get good at.`,
      price: 520,
      region: 'San Antonio, Texas',
      img: IMG_RPODUCT_1,
    },
    {
      id: 3,
      title: 'Product Title',
      desc: `There’s nothing I really wanted to do in life that I wasn’t able to get good at.`,
      price: 520,
      region: 'San Antonio, Texas',
      img: IMG_RPODUCT_1,
    }
  ]

  return (
    <Wrapper>

      <StoreHeader>
        <div className='left-div'>
          <h1>My store</h1>
          <div>
            <VscLocation></VscLocation>
            <p>City, state</p>
          </div>
        </div>

        <Link to={PRIVATE_URLS.ADDLISTING}>Add product</Link>
        
      </StoreHeader>

      <Container>
        {
          <ProductsContainer>
            {
              products.map((item, index) => (
                <ProductDiv key={index} bgImg={item.img}>
                  <div className='img-container'></div>
                  <div className='info'>
                    <h1 className='p-title'>
                      {
                        item.title
                      }
                    </h1>

                    <p className='p-desc'>
                      {
                        item.desc
                      }
                    </p>

                    <div className='price-div'>
                      <h1 className='p-price'>
                        ${
                          item.price
                        }
                      </h1>
                      <TbShare3 onClick={() => AppData.setFlagShareDiv(item.id)}></TbShare3>
                    </div>
                  </div>

                  <img className='remove' src={IMG_CLOSE} onClick={() => AppData.setDelProd(item.id)} />
                </ProductDiv>
              ))
            }</ProductsContainer>
        }
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Container = styled.div`
  flex: 1;
`

const Noresult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  p {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    align-items: flex-end;
    color: #FAFAFA;
  }
`

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 50px;
  @media screen and (max-width: 1060px) {
    flex-direction: column;
    align-items: center;
  }
`

const ProductDiv = styled.div`
  width: 370px;
  position: relative;

  .remove {
    position: absolute;
    top: -10px;
    right: -10px;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
  background: #393939;
  border: 1px solid #000000;
  box-shadow: 0px 1px 2px rgba(51, 65, 86, 0.08);
  border-radius: 12px;
  cursor: pointer;

  .img-container {
    width: 100%;
    background-image: url(${p => p.bgImg});
    height: 370px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px 12px 0 0;
  }
  .info {
    padding: 16px;
    .p-title {
      font-family: 'Unbounded';
      font-style: normal;
      font-size: 24px;
      line-height: 137%;
      align-items: center;
      letter-spacing: -0.8px;
      color: #FAFCFF;
    }

    .p-desc {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #64748B;
    }

    .price-div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      .p-price {
        font-family: 'Unbounded';
        font-style: normal;
        font-size: 24px;
        line-height: 137%;
        color: #FFFFFF;
      }
      svg {
        color: white;
        scale: 1.4;
        cursor: pointer;
      }
    }
  }
`

const ProductDetailDiv = styled.div`
  margin-top: 50px;
  .img-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 1060px) {
      justify-content:  center;
    }
    img {
      @media screen and (max-width: 400px) {
        width: 100%;
      } 
    }
  }

  .pd_info {
    margin-top: 30px;
    margin-bottom: 50px;
    .title {
      font-family: 'Unbounded';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 137%;
      letter-spacing: -0.8px;
      color: #FFFFFF;

    }

    .pd_info_container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 50px;
      @media screen and (max-width: 1060px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .left_div {
        width: 60%;
        @media screen and (max-width: 1060px) {
          width: 100%;
        }
        .region {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: #FFFFFF;
          margin: 20px 0 30px 0;
        }
        .desc {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 150%;
          color: #FFFFFF;
        }

        ul {
          margin-left: 15px;
          list-style-type: disc;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: #64748B;
        }
        .detail_end {
          font-style: normal;
          margin-top: 20px;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: #64748B;
        }
      }

      .right_div {
        @media screen and (max-width: 1060px) {
          width: 100%;
        }
        .price {
          font-family: 'Unbounded';
          font-style: normal;
          font-weight: 400;
          font-size: 30px;
          line-height: 137%;
          letter-spacing: -0.8px;
          color: #FFFFFF;
        }

        .stars {
          display: flex;
          align-items: center;
          gap: 20px;

          p {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #64748B;
          }
        }

        .icon-div {
          display: flex;
          align-items: center;
          p {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 23px;
            color: #FFFFFF;
          }
          gap: 10px;
        }

        
      }
    }
  }
`

const StoreHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .left-div {
    display: flex;
    align-items: center;
    gap: 30px;
    h1 {
      font-family: 'Unbounded';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      display: flex;
      align-items: flex-end;
      color: #FAFAFA;
    }
    div {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      color: #FFFFFF;
      svg {
        color: white;
        fill: white;
        scale: 1.4;
      }
    }
  }
  a {
    background: #EDAE49;
    border-radius: 6px;
    text-decoration: none;
    color: black;
    padding: 12px 150px;
    font-weight: 700;
    font-size: 13px;
    line-height: 17px;
    color: #000000;

    @media screen and (max-width: 375px) {
      padding: 12px;
      width: max-content;
    }
    @media screen and (max-width: 1000px) {
      width: 100%;
      text-align: center;
    }
  }
`