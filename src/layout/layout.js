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

const LayoutWrapper = styled.div`
  background-color: ${p => p.theme.bgColor};
  min-height: 100vh;
`

const ContainerWrapper = styled.div`

`