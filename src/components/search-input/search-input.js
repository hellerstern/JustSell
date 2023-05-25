import styled from "styled-components";
import { TextInput } from "carbon-components-react";
import { GoSearch } from 'react-icons/go';

export const SearchInput = () => {
  return (
    <Wrapper>
      <TextInput placeholder="Search service, city or username"></TextInput>
      <GoSearch></GoSearch>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    color: #C6C6C6;
    top: 12px;
    left: 10px;

    @media screen and (max-width: 790px) {
      display: none;
    }
  }
  input {
    width: 620px;

    @media screen and (max-width: 1240px) {
      width: 320px;
    }

    @media screen and (max-width: 790px) {
      width: 100%;
    }

    background: #262626;
    outline: none;
    color: ${p => p.theme.fontColor2};
    font-size: 14px;
    line-height: 18px;
    padding-left: 35px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #6F6F6F;
    }
  }
`