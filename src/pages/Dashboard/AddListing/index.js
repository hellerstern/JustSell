import styled from "styled-components";
import { DashboardContainer } from "../../../layout/layout";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { Header2 } from "../../../components/header/header2";
import { CAddListing } from "../../../components/addlisting/CAddListing";

const AddListing = () => {
  return (
    <DashboardContainer>
      <Sidebar current="store"></Sidebar>
      <Container>
        <Header2></Header2>
        <CAddListing></CAddListing>
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
  padding: 20px;

  & > div:nth-child(1) {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }
  & > div:nth-child(2) {
    /* display: none; */
  }
`

export default AddListing;