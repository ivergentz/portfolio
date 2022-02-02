import React from "react"
import styled from "styled-components"
import Main from "./components/Main"

const Home = () => {
  return (
    <Container>
      <Main />
    </Container>
  )
}

export default Home

const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`
