import { useState } from "react";
import styled, {css} from "styled-components";
import { TextInput, UnorderedList } from "carbon-components-react";
import {
  HiOutlineEye, 
  HiOutlineEyeOff
} from 'react-icons/hi';

export const Input1 = ({ styleFlag, type, label, placeholder, val, setVal }) => {

  const [iconFlag, setIconFlag] = useState(false);

  return (
    <Wrapper flag1={val == ''} styleFlag={styleFlag}>
      <p>{label}</p>
      <TextInput
        type={ type === 'password' && iconFlag === true ? 'input' : type } 
        placeholder={placeholder} 
        value={val} 
        onChange={(e) => setVal(e.target.value)}
      ></TextInput>
      {
        type === 'password' ? (
          !iconFlag ? <HiOutlineEye onClick={() => setIconFlag(true)} /> : <HiOutlineEyeOff onClick={() => setIconFlag(false)}  />
        ) : undefined
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: min-content;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
  input {
    width: 380px;
    background-color: transparent;
    border: 2px solid #E0E0E0;
    ${p => p.styleFlag ? css`
      border-bottom: none;
    `: undefined}
    font-style: normal;
    font-size: 18px;
    line-height: 28px;
    padding: 50px 20px 25px 20px;
    color: ${p => p.theme.fontColor2};
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #757575;
    }

    @media screen and (max-width: 620px) {
      width: 100%;
    }
  }

  p {
    position: absolute;
    font-size: 11px;
    color: ${p => p.flag1 ? p.theme.fontColor2 : '#757575'};
    left: 20px;
    top: 20px
  }

  svg {
    position: absolute;
    top: 30px;
    right: 20px;
    color: #BEBEBE;
    transform: scale(1.5);
  }
`