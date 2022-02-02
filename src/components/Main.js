import React from "react"
import styled from "styled-components"
import Background from "./Background"
import Footer from "./Footer"

const Main = () => {
  return (
    <Background>
      <div>
        <HeaderContainer>
          <IconContainer>icon</IconContainer>
          <HeaderText>
            <h1>Iver Gentz</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              iste eligendi modi odit nulla eius incidunt nostrum natus?
              Necessitatibus neque inventore dolores labore quam dolore modi
              rerum perspiciatis libero! Quam.
            </p>
          </HeaderText>
          <Navigation>
            <MenuItem>CV</MenuItem>
            <MenuItem>Zeugnisse</MenuItem>
            <MenuItem>Referenzen</MenuItem>
            <MenuItem>contact</MenuItem>
          </Navigation>
        </HeaderContainer>
        <Footer />
      </div>
    </Background>
  )
}

export default Main

const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 95vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1pt solid white;
  border-radius: 50pt;
  min-width: 10vw;
  min-height: 10vw;
  color: white;
  font-weight: 900;
`

const HeaderText = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 2rem;
  border-top: 1pt solid white;
  border-bottom: 1pt solid white;
  color: white;
`

const Navigation = styled.ul`
  padding: 0;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
`
const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-width: 3vw;
  min-height: 3vw;
  text-decoration: none;
  list-style: none;
  padding: 0.5rem 2rem;
  border-bottom: 1pt solid white;

  /* &:first-child {
    border-top: 0;
  } */
  &:last-child {
    border-bottom: 0;
  }
`
