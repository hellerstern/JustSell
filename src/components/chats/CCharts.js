import { useState, useEffect } from "react";
import styled from "styled-components";
import { TextInput } from "@carbon/react";
import { GoSearch } from 'react-icons/go';
import { AiOutlineFire, AiOutlinePaperClip } from 'react-icons/ai';
import { BsEmojiSmile, BsMic } from 'react-icons/bs';

import {
  IMG_USER_1,
  IMG_USER_2,
  IMG_USER_3,
  IMG_USER_4,
  IMG_USER_5,
  IMG_ME,
} from '../../config/images';

export const CCharts = () => {



  const [slt_user, setSltUser] = useState(1);

  const mydata = {
    avatar: IMG_ME,
    name: 'Darshan Zalavadiya',
    status: 2,
  }

  const users_data = [
    {
      id: 1,
      img: IMG_USER_1,
      name: 'Figma Teams',
    },
    {
      id: 2,
      img: IMG_USER_2,
      name: 'School App Client',
    },
    {
      id: 3,
      img: IMG_USER_3,
      name: 'UX/UI Teams',
    },
    {
      id: 4,
      img: IMG_USER_4,
      name: 'Frontend Developer',
    },
    {
      id: 5,
      img: IMG_USER_5,
      name: 'Backend Developer',
    },
    {
      id: 1,
      img: IMG_USER_1,
      name: 'Figma Teams',
    },
    {
      id: 2,
      img: IMG_USER_2,
      name: 'School App Client',
    },
    {
      id: 3,
      img: IMG_USER_3,
      name: 'UX/UI Teams',
    },
    {
      id: 4,
      img: IMG_USER_4,
      name: 'Frontend Developer',
    },
    {
      id: 5,
      img: IMG_USER_5,
      name: 'Backend Developer',
    }
  ]

  const chat_history = [
    {
      type: 0, // 0:in, 1:out
      user_id: 1,
      content: "Hello, Darshan",
      isRead: true,
    },
    {
      type: 0, // 0:in, 1:out
      user_id: 1,
      content: "Hello, Darshan",
      isRead: true,
    },
    {
      type: 0, // 0:in, 1:out
      user_id: 1,
      content: "Hello, Darshan",
      isRead: true,
    },
    {
      type: 0, // 0:in, 1:out
      user_id: 1,
      content: "Hello, Darshan",
      isRead: true,
    },
    {
      type: 1,
      user_id: 1,
      content: "Hello",
    },
    {
      type: 0,
      user_id: 1,
      content: "How are you?",
      isRead: true,
    },
    {
      type: 1,
      user_id: 1,
      content: "I'm good",
    },
    {
      type: 1,
      user_id: 1,
      content: "What about you?",
    },
    {
      type: 0,
      user_id: 1,
      content: "Same for this also",
      isRead: false,
    },
    {
      type: 1,
      user_id: 1,
      content: "Good",
    },
    {
      type: 0, // 0:in, 1:out
      user_id: 2,
      content: "Hello, Darshan",
      isRead: true,
    },
    {
      type: 1,
      user_id: 2,
      content: "Hello",
    },
    {
      type: 0,
      user_id: 2,
      content: "How are you?",
      isRead: true,
    },
    {
      type: 1,
      user_id: 2,
      content: "I'm good",
    },
    {
      type: 1,
      user_id: 2,
      content: "What about you?",
    },
    {
      type: 0,
      user_id: 2,
      content: "Same for this also",
      isRead: true,
    },
    {
      type: 1,
      user_id: 2,
      content: "Good Work",
    },
    {
      type: 0, // 0:in, 1:out
      user_id: 3,
      content: "Hello, Darshan",
      isRead: true,
    },
    {
      type: 1,
      user_id: 3,
      content: "Hello",
    },
    {
      type: 0,
      user_id: 3,
      content: "How are you?",
      isRead: true,
    },
    {
      type: 1,
      user_id: 3,
      content: "I'm good",
    },
    {
      type: 1,
      user_id: 3,
      content: "What about you?",
    },
    {
      type: 0,
      user_id: 3,
      content: "Same for this also",
      isRead: true,
    },
    {
      type: 1,
      user_id: 3,
      content: "I have done my work",
    },
    {
      type: 0, // 0:in, 1:out
      user_id: 4,
      content: "Hello, Darshan",
      isRead: true,
    },
    {
      type: 1,
      user_id: 4,
      content: "Hello",
    },
    {
      type: 0,
      user_id: 4,
      content: "How are you?",
      isRead: true,
    },
    {
      type: 1,
      user_id: 4,
      content: "I'm good",
    },
    {
      type: 1,
      user_id: 4,
      content: "What about you?",
    },
    {
      type: 0,
      user_id: 4,
      content: "Same for this also",
      isRead: true,
    },
    {
      type: 1,
      user_id: 4,
      content: "Good",
    },
    {
      type: 0, // 0:in, 1:out
      user_id: 5,
      content: "Hello, Darshan",
      isRead: true,
    },
    {
      type: 1,
      user_id: 5,
      content: "Hello",
    },
    {
      type: 0,
      user_id: 5,
      content: "How are you?",
      isRead: true,
    },
    {
      type: 1,
      user_id: 5,
      content: "I'm good",
    },
    {
      type: 1,
      user_id: 5,
      content: "What about you?",
    },
    {
      type: 0,
      user_id: 5,
      content: "Same for this also",
      isRead: true,
    },
    {
      type: 1,
      user_id: 5,
      content: "I have done my work 👍",
    },
  ]

  const get_last_chat = (id) => {
    let data = chat_history.filter(item => item.user_id === id);
    return data[data.length-1].content;
  }

  const unread_msg_counter = (id) => {
    return chat_history.filter(item => item.user_id === id && item.isRead).length;
  }

  return (
    <Wrapper> 
      <Users>
        <SearchInputDiv>
          <TextInput placeholder="Search....."></TextInput>
          <GoSearch></GoSearch>
        </SearchInputDiv>

        <h1 className="title">Message</h1>

        <UsersIndexDiv>
          {
            users_data.map((item, index) => (
              <UserIndex key={index} onClick={() => setSltUser(item.id)}>
                <div className="left-div">
                  <div className="avatar">
                    <img src={item.img}></img>
                  </div>

                  <div className="info">
                    <p>{item.name}</p>
                    <p>{get_last_chat(item.id)}</p>
                  </div>
                </div>
              </UserIndex>
            ))
          }
        </UsersIndexDiv>
      </Users>
      <ChatContents>
        <ChatHeader>

          <div className="user-info">
            <img src={mydata.avatar}></img>
            <div>
              <p>{mydata.name}</p>
              <p>{mydata.status === 2 ? 'Online' : 'Offline'}</p>
            </div>
          </div>

          <AiOutlineFire />
        </ChatHeader>

        <ChatDisplay>
          <Time>Today, 9:30 am</Time>
          <ChatDisplayDiv>
            {
              slt_user !== -1 ? 
                chat_history.filter(item => item.user_id === slt_user).map((item, index) => 
                  item.type === 0 ? (
                    <div className="you" key={index}>
                      <img src={users_data.filter(user => user.id === item.user_id)[0].img}></img>
                      <p>{item.content}</p>
                    </div>
                  ) : (
                    <div className="me" key={index}>
                      <p key={index}>{item.content}</p>
                    </div>
                  )
                ) :
                <p>None</p>
            }
          </ChatDisplayDiv>
        </ChatDisplay>

        <ChatBox>
          <ChatInput>
            <BsEmojiSmile />
            <input placeholder={'Message...'}></input>
            <AiOutlinePaperClip />
          </ChatInput>
          <ChatEnter>
            <BsMic />
          </ChatEnter>
        </ChatBox>
      </ChatContents>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  overflow: hidden;
`

const Users = styled.div`
  width: 320px;

  @media screen and (max-width: 900px) {
    width: min-content;
  }
  height: 100%;
  background-color: #1F1D1D;
  padding: 20px 5px;
  display: flex;
  flex-direction: column;

  .title {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;
    margin-top: 20px;
    margin-left: 10px;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`

const ChatContents = styled.div`
  background-color: #000000;
  flex: 1;

  display: flex;
  flex-direction: column;
  height: 100%;

`

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1px;
  background: #1F1D1D;
  padding: 0 10px;
  * {
    color: white;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;

    img {
      width: 47px;
      border-radius: 50px;
    }
    div {
      @media screen and (max-width: 500px) {
        display: none;
      }
      p {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
      }
      & > p:nth-child(2) {
        color: ${p => p.theme.secondary};
      }
    }
  }

  svg {
    scale: 1.5;
  }
`

const SearchInputDiv = styled.div`
  position: relative;
  svg {
    position: absolute;
    color: white;
    top: 12px;
    left: 10px;
  }
  input {
    width: 100%;
    background: #543639;
    outline: none;
    color: ${p => p.theme.fontColor2};
    font-size: 14px;
    line-height: 18px;
    padding-left: 35px;
    border: 0;
    border-radius: 50px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #6F6F6F;
    }
  }
`

const UsersIndexDiv = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 5px;

  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #767876; 
  }
`

const UserIndex = styled.div`
  
  padding: 13px 8px;
  @media screen and (max-width: 900px) {
    padding: 0;
    background: none;
  }
  background: #312F2F;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  .left-div {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 80%;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
    overflow: hidden;
    .avatar {
      img {
        width: 60px;
        border-radius: 50px;
      }
    }
  
    .info {
      width: 100%;
      @media screen and (max-width: 900px) {
        display: none;
      }
      p {
        font-family: 'IBM Plex Sans';
        font-weight: 600;
        font-size: 14px;
        line-height: 15px;
        width: 90%;
        color: #FFFFFF;
        margin-bottom: 3px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      & > p:nth-child(2) {
        color: #767876;
      }
    }
  }
`

const ChatDisplay = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`

const Time = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.83);
  margin-top: 10px;

`

const ChatDisplayDiv = styled.div` 
  flex: 1;
  margin: 10px;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }

  ::-webkit-scrollbar-thumb {
    background: #767876; 
  }
  p {
    font-style: 'IBM Plex Sans';
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    background: #312F2F;
    border-radius: 50px;
    padding: 7px 20px;
  }

  div {
    margin: 20px 0;
  }

  .you {
    font-family: 'Inter';
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 50px;
      border-radius: 50px;
    }
  }

  .me {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`

const ChatBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 5px;
`

const ChatInput = styled.div`
  position: relative;
  background: #312F2F;
  border-radius: 30px;
  flex: 1;
  input {
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    font-family: 'IBM Plex Sans';
    color: white;
    background: #312F2F;
    width: 100%;
    outline: none;
    border: none;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    padding: 18px 65px;
    @media screen and (max-width: 500px) {
      padding: 18px 65px 18px 18px;
    }
    border-radius: 50px;
  }

  svg {
    position: absolute;
    color: white;
  }

  & > svg:nth-child(1) {
    scale: 2;
    top: 23px;
    left: 30px;
    @media screen and (max-width: 500px) {
      display: none;
    }
  } 
  & > svg:nth-child(3) {
    scale: 2;
    top: 23px;
    right: 30px;
  } 
`

const ChatEnter = styled.div`
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #312F2F;
  border-radius: 50px;

  svg {
    color: white;
    scale: 1.5;
  }
`