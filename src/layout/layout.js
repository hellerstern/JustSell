import React from "react";
import styled from "styled-components";

export const Layout = ({children}) => {
  return (
    <LayoutWrapper>
      {
        children
      }
    </LayoutWrapper>
  )
}

export const Container = ({children}) => {
	return (
		<ContainerWrapper>
      {
        children
      }
		</ContainerWrapper>
	)
}

export const DashboardContainer = ({children}) => {
  return (
    <DashboardWrapper>
      {children}
    </DashboardWrapper>
  )
}

const LayoutWrapper = styled.div`
  background-color: ${p => p.theme.bgColor};
  height: 100vh;
  overflow-x: hidden;
`

const ContainerWrapper = styled.div`

`

const DashboardWrapper = styled.div`
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  position: relative;
  height: 100%;
`