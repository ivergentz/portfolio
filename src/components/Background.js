import React from "react"
import styled from "styled-components"
import background from "../assets/background.jpg"

const Background = (props) => {
  return <BackgroundContainer>{props.children}</BackgroundContainer>
}

export default Background

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: black;
  /* opacity: 1; */
  margin: 0;
  padding: 0;
`
