import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../logo/logo";
import { BiMenuAltRight } from 'react-icons/bi';
import { MdPlaylistRemove } from 'react-icons/md'
import { AppContext } from "../../context/context";
import { PUBLIC_URLS, PRIVATE_URLS } from "../../config/config";
import {
  IMG_CHAT_1,
  IMG_CHAT_2,
  IMG_SEARCH_1,
  IMG_SEARCH_2,
  IMG_ORDER_1,
  IMG_ORDER_2,
  IMG_SETTING_1,
  IMG_SETTING_2,
  IMG_HELP_1,
  IMG_HELP_2,
  IMG_LOGOUT_1,
  IMG_LOGOUT_2,

  IMG_STORE_1,
  IMG_SALES_1,
  IMG_WALLET_1,
  IMG_STORE_2,
  IMG_SALES_2,
  IMG_WALLET_2,
} from '../../config/images';

export const Header2 = () => {

  const AppData = useContext(AppContext);
  const [mobileFlag, setMobileFlag] = useState(false);

  const data1 = AppData.isSeller ? [
    {
      img_1: IMG_SEARCH_1,
      img_2: IMG_SEARCH_2,
      label: 'Search',
      url: PRIVATE_URLS.SEARCH
    },
    {
      img_1: IMG_ORDER_1,
      img_2: IMG_ORDER_2,
      label: 'Orders',
      url: PRIVATE_URLS.ORDERS
    },
    {
      img_1: IMG_CHAT_1,
      img_2: IMG_CHAT_2,
      label: 'Chats',
      url: PRIVATE_URLS.CHATS
    },
    {
      img_1: IMG_SETTING_1,
      img_2: IMG_SETTING_2,
      label: 'Settings',
      url: PRIVATE_URLS.SETTINGS
    },
  ] : [
    {
      img_1: IMG_STORE_1,
      img_2: IMG_STORE_2,
      label: 'Store',
      url: PRIVATE_URLS.STORE
    },
    {
      img_1: IMG_SALES_1,
      img_2: IMG_SALES_2,
      label: 'Sales',
      url: PRIVATE_URLS.SALES
    },
    {
      img_1: IMG_WALLET_1,
      img_2: IMG_WALLET_2,
      label: 'Wallet',
      url: PRIVATE_URLS.WALLET
    },
    {
      img_1: IMG_CHAT_1,
      img_2: IMG_CHAT_2,
      label: 'Chats',
      url: PRIVATE_URLS.CHATS
    },
    {
      img_1: IMG_SETTING_1,
      img_2: IMG_SETTING_2,
      label: 'Settings',
      url: PRIVATE_URLS.SETTINGS
    },
  ]

  return (
    <Wrapper>
      <Container>
        <Logo str={'J$'}></Logo>
        <BiMenuAltRight onClick={() => setMobileFlag(true)}/>
      </Container>

      <MobileDiv flag={mobileFlag}>
        <MobileContainer>
          <MdPlaylistRemove onClick={() => setMobileFlag(false)}/>
          <Nav>
            {
              data1.map((item, index) => (
                <StyledNavLink to={item.url} img_1={item.img_1} img_2={item.img_2} key={index}><img></img> <p>{item.label}</p></StyledNavLink>
              ))
            }
          </Nav>
        </MobileContainer>
      </MobileDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  svg {
    color: white;
    transform: scale(2);
  }
`

const MobileDiv = styled.div`
  position: fixed;
  transition: all .3s;
  color: white;
  top: 0;
  left: ${p => p.flag ? 0 : '100vw'};
  width: 100vw;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(10px);
`

const MobileContainer = styled.div` 
  position: relative;
  svg {
    position: absolute;
    top: 30px;
    right: 30px;
    scale: 2;
  }
` 

const Nav = styled.div`
  padding-top: 50px;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.fontColor2};
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  padding: 25px 0;
  gap: 35px;
  padding-left: 50px;
  img {
    content: url(${p => p.img_1});
  }

  &.active {
    color: ${p => p.theme.secondary};
    img {
      content: url(${p => p.img_2});
    }
  }

  justify-content: start;
`