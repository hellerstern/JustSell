
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { SearchInput } from "../search-input/search-input";
import { Link } from 'react-router-dom';
import {
  IMG_NORESULT,
  IMG_RPODUCT_1,
  IMG_PD_1,
  IMG_PD_2,
  IMG_STAR_1,
  IMG_STAR_2,
  IMG_SHARE,
  IMG_CHAT,
} from "../../config/images";
import { PRIVATE_URLS } from '../../config/config';

export const CSearch = () => {

  const [searchVal, setSearchVal] = useState('');
  const [sltProduct, setSltProduct] = useState(null);

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
      <SearchInput val={searchVal} setVal={setSearchVal}></SearchInput>

      <Container>
        {
          searchVal !== '' && sltProduct === null ? ( <ProductsContainer>{
              products.filter(item => item.title.toUpperCase().indexOf(searchVal.toUpperCase()) !== -1).map((item, index) => (
                <ProductDiv key={index} bgImg={item.img} onClick={() => setSltProduct(item.id)}>
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
                      <p className='p-region'>
                        {
                          item.region
                        }
                      </p>
                    </div>
                  </div>
                </ProductDiv>
              ))
            }</ProductsContainer> )
             : 
             searchVal !== '' && sltProduct !== null ? (
              <ProductDetailDiv>
                <div className='img-container'>
                  <img src={IMG_PD_1}></img>
                  <img src={IMG_PD_2}></img>
                  <img src={IMG_PD_2}></img>
                </div>

                <div className='pd_info'>
                  <h1 className='title'>
                    Lavander Oil
                  </h1>

                  <div className='pd_info_container'>
                    <div className='left_div'>
                      <p className='region'>{'City, State'}</p>
                      <p className='desc'>{`Description`}</p>
                      <ul>
                        <li>
                          {`That’s what I do. That’s what I’m here for`}
                        </li>
                        <li>
                          {`That’s what I do. That’s what I’m here for`}
                        </li>
                        <li>
                          {`That’s what I do. That’s what I’m here for`}
                        </li>
                      </ul>
                      <p className='detail_end'>
                        {`There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn.`}
                      </p>
                    </div>
                    <div className='right_div'>
                      <h1 className='price'>{`$25`}</h1>
                      
                      <div className='stars'>
                        <div>
                          <img src={IMG_STAR_1}></img>
                          <img src={IMG_STAR_1}></img>
                          <img src={IMG_STAR_1}></img>
                          <img src={IMG_STAR_1}></img>
                          <img src={IMG_STAR_2}></img>
                        </div>
                        <p>100 reviews</p>
                      </div>

                      <div className='icon-div'>
                        <img src={IMG_SHARE}></img>
                        <p>Share</p>
                      </div>
                      <div className='icon-div' style={{marginBottom: '100px'}}>
                        <img src={IMG_CHAT}></img>
                        <p>Chat</p>
                      </div>
                      <Link to={PRIVATE_URLS.CHECKOUT}>Book</Link>
                    </div>

                  </div>
                </div>
              </ProductDetailDiv>
             ) : (
              <Noresult>
                <img src={IMG_NORESULT}></img>
                <p>
                  No results...
                </p>
              </Noresult>
            )
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

  @media screen and (max-width: 425px) {
    width: 100%;
  }
  background: #393939;
  border: 1px solid #000000;
  box-shadow: 0px 1px 2px rgba(51, 65, 86, 0.08);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  .img-container {
    width: 100%;
    background-image: url(${p => p.bgImg});
    height: 370px;
    background-repeat: no-repeat;
    background-size: cover;
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
      .p-region {
        font-size: 16px;
        line-height: 150%;
        color: #64748B;
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
        }
      }
    }
  }
`