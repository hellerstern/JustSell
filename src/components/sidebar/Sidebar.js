import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Logo } from "../logo/logo";
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
} from '../../config/images';

export const Sidebar = () => {

  const data1 = [
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
  ];

  const data2 = [
    {
      img_1: IMG_HELP_1,
      img_2: IMG_HELP_2,
      label: 'Get help',
      url: '/'
    },
    {
      img_1: IMG_LOGOUT_1,
      img_2: IMG_LOGOUT_2,
      label: 'Log out',
      url: PUBLIC_URLS.LOGIN
    },
  ]

  return (
    <Wrapper>
      <Container1>
        <Header>
          <Logo str={'J$'} />
        </Header>
        <Nav>
          {
            data1.map((item, index) => (
              <StyledNavLink to={item.url} img_1={item.img_1} img_2={item.img_2} key={index}><img></img> <p>{item.label}</p></StyledNavLink>
            ))
          }
        </Nav>
      </Container1>
      <Container1>
        <Nav>
          {
            data2.map((item, index) => (
              <StyledNavLink to={item.url} img_1={item.img_1} img_2={item.img_2} key={index}><img></img> <p>{item.label}</p></StyledNavLink>
            ))
          }
        </Nav>
      </Container1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    width: 80px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`

const Header = styled.div`
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.fontColor2};
  font-family: 'Roboto';
  display: flex;
  justify-content: flex-start;
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

  @media screen and (max-width: 900px) {
    padding-left: 0px;
    justify-content: center;
    p {
      display: none;
    }
  }
`