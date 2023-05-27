import styled from "styled-components";
export const COrders = () => {

  const data = [
    {
      name: 'Title',
      date: 'April 2, 2023',
      amount: 436,
    },
    {
      name: 'Title',
      date: 'April 2, 2023',
      amount: 436,
    },
    {
      name: 'Title',
      date: 'April 2, 2023',
      amount: 436,
    }
  ]

  return (
    <Wrapper>
      <h1 className="title">Orders</h1>
      <Container>
        {
          data.map((item, index) => (
            <IndexDiv key={index}>
              <div className="left-div">
                <div className='sDiv'>
                  <p>Name</p>
                  <p>{item.name}</p>
                </div>
                <div className='sDiv'>
                  <p>Date</p>
                  <p>{item.date}</p>
                </div>
                <div className='sDiv'>
                  <p>Amount</p>
                  <p>{item.amount}</p>
                </div>
              </div>

              <div className="right-div">
                <button>
                  Instant Refund
                </button>
                <button>
                  Open Hi-5
                </button>
              </div>
            </IndexDiv>
          ))
        }
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;

  .title {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: flex-end;
    color: ${p => p.theme.fontColor2};
  }
`

const Container = styled.div`
  margin-top: 60px;
`

const IndexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 30px;
  } 

  background: #000000;
  border: 1px solid #DDE0E5;
  box-shadow: 0px 1px 2px rgba(51, 65, 86, 0.08);
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;

  .left-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media screen and (max-width: 900px) {
      gap: 30px;      
    }
    @media screen and (max-width: 700px) {
      justify-content: space-between;
      width: 100%;
    }

    div {
      p {
        white-space: nowrap;
      }
      & > p:nth-child(1) {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
      }
      & > p:nth-child(2) {
        color: #C4C4C4;
      }
    }
  }

  .right-div {
    @media screen and (max-width: 700px) {
      width: 100%;
    }
    button {
      white-space: nowrap;
    }
    & > button:nth-child(1) {
      background: #F63E02;
      border-radius: 6px;
      padding: 11px 24px;
  
      font-family: 'Roboto';
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      color: #000000;
      outline: 0;
      border: 0;
      margin-right: 10px;
    }

    & > button:nth-child(2) {
      background: #EDAE49;
      border-radius: 6px;
      padding: 11px 24px;
  
      font-family: 'Roboto';
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      color: #000000;
      outline: 0;
      border: 0;
    }
  }
`