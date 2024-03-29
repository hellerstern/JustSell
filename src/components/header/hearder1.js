import { useState } from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { SearchInput } from "../../components/search-input/search-input";
import { Link } from "react-router-dom";
import { CgMenuGridO, CgPlayListRemove } from 'react-icons/cg';

import { PUBLIC_URLS } from "../../config/config";


export const Header1 = () => {

  const [mobileFlag, setMobileFlag] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  return (
    <Wrapper>
      <LeftDiv>
        <Logo str={'Just$ell'}></Logo>
        <SearchInput val={searchVal} setVal={setSearchVal}></SearchInput>
      </LeftDiv>

      <RightDiv className="desktop">
        <Button1 to={PUBLIC_URLS.LOGIN}>Sign in</Button1>
        <Button2 to={PUBLIC_URLS.SIGNUP}>Start selling+</Button2>
      </RightDiv>

      <MenuIcon>
        <CgMenuGridO onClick={() => {setMobileFlag(!mobileFlag); console.log('first')}}></CgMenuGridO>
      </MenuIcon>

      <MobileDiv flag={mobileFlag}>
        <div className="mobileheader-wrapper">
          <CgPlayListRemove className="mobilediv-trigger" onClick={() => setMobileFlag(false)} />
            <SearchIconInput>
              <SearchInput></SearchInput>
            </SearchIconInput>
            <Button1>Sign in</Button1>
            <Button2>Start selling+</Button2>
        </div>
      </MobileDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

  .desktop {
    @media screen and (max-width: 790px) {
      display: none;
    }
  }


  max-width: ${p => p.theme.maxWidth};
	margin: auto;
	padding: 85px 100px 30px 100px;
	@media screen and (max-width: 950px) {
		padding: 85px 30px 30px 30px;
	}

	@media screen and (max-width: 425px) {
		padding: 85px 10px 30px 10px;
	}
`

const Button1 = styled(Link)`
	text-align: center;
	background: #F4F4F4;
	color: ${p => p.theme.fontColor1};

	border: none;
	outline: none;
	padding: 11px 14px;
	font-size: 14px;
	line-height: 18px;

	&:hover {
		background: #F4F4F4;
		color: ${p => p.theme.fontColor1};
	}
  text-decoration: none;
`

const Button2 = styled(Link)`
	border: none;
	outline: none;
	padding: 11px 14px !important;
	font-size: 14px;
	line-height: 18px;
	background: #EDAE49;
	text-align: center;
	color: ${p => p.theme.fontColor1};

	&:hover {
		background: #EDAE49;
		color: ${p => p.theme.fontColor1};
	}
  text-decoration: none;
`

const LeftDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
  gap: 30px;

  input {
    @media screen and (max-width: 790px) {
      display: none;
    }
  }
`

const RightDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
  gap: 20px;
`

const MenuIcon = styled.div`
  display: none;
	align-items: center;
	justify-content: space-between;
  svg {
    color: ${p => p.theme.fontColor2};
    transform: scale(2);
    cursor: pointer;
  }
  @media screen and (max-width: 790px) {
    display: flex;
  }
`

const MobileDiv = styled.div`
  position: fixed;
  top: 0;
  transition: all .3s;
  right: ${p => p.flag ? 0 : '-100vw'};
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  z-index: 100;

  .mobileheader-wrapper {
    z-index: 100;
  }
  .mobileheader-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 150px 20px 20px 20px;
    gap: 30px;

    .mobilediv-trigger {
      position: absolute;
      top: 80px;
      right: 30px;
      color: white;
      transform: scale(2);
      cursor: pointer;
    }
  }
`

const SearchIconInput = styled.div`
  svg {
    display: block !important;
  }
`