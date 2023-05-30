import styled from "styled-components";
import { DashboardContainer } from "../../../layout/layout";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { CCharts } from "../../../components/chats/CCharts";
import { Header2 } from "../../../components/header/header2";

const Chats = () => {
  return (
    <DashboardContainer>
      <Sidebar current="chats"></Sidebar>
      <Container>
        <Header2></Header2>
        <CCharts></CCharts>
      </Container>
    </DashboardContainer>
  )
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: calc(100% - 250px);

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    width: calc(100% - 80px);
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 0px);
  }
  float: right;
  & > div:nth-child(1) {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }
  & > div:nth-child(1) {
    /* display: none; */
    padding: 0 20px;
  }
`

export default Chats;