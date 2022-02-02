import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <p>© Iver Gentz 2022</p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
  }
`
