import styled from "styled-components";
import { SearchInput } from "../search-input/search-input";
import { IMG_NORESULT } from "../../config/images";

export const CSearch = () => {
  return (
    <Wrapper>
      <SearchInput></SearchInput>

      <Container>
        <Noresult>
          <img src={IMG_NORESULT}></img>
          <p>
            No results...
          </p>
        </Noresult>
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
  display: flex;
  justify-content: center;
  align-items: center;
`

const Noresult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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