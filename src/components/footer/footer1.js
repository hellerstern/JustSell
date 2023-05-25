import styled from "styled-components";

export const Footer1 = () => {
  return (
    <Wrapper>
      <p>Just%ell</p>

      <div className="container1">
        <p>© 2023 Abstergo Ltd.</p>

        <div className="container2">
          <p>Privacy Policy</p>
          <p>Terms of Conditions</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 30px;

  p {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #E2E6CE;
  }

  .container1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 80px;
    border-top: 1px solid #434047;
    padding-top: 10px;

    @media screen and (max-width: 555px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  .container2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`