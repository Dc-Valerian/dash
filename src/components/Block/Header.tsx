import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from "react-scroll"

const Header = () => {
  const [show, setShow] = useState(false)

  const changeHeaderColor = () => {
    if(window.scrollY >=70) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  window.addEventListener('scroll', changeHeaderColor)
  // console.log(window.scrollY);
  return (
    <div>
      {show ? (
        <Container props="red" col="white">
        <Wrapper>
          <Logo>Valerian</Logo>

          <NavHolder>
            <Nav to='home' duration={500} smooth={true}>Home</Nav>
            <Nav to='about'  duration={500} smooth={true}>About</Nav>
            <Nav to='services'  duration={500} smooth={true}>Services</Nav>
            <Nav to='contact'  duration={500} smooth={true}>Contact</Nav>
            <Nav to='features'  duration={500} smooth={true}>Features</Nav>
          </NavHolder>
        </Wrapper>
      </Container>
      ) : (
        <Container props="green" col="black">
        <Wrapper>
          <Logo>Valerian</Logo>

          <NavHolder>
            <Nav to='home' duration={500} smooth={true}>Home</Nav>
            <Nav to='about'  duration={500} smooth={true}>About</Nav>
            <Nav to='services'  duration={500} smooth={true}>Services</Nav>
            <Nav to='contact'  duration={500} smooth={true}>Contact</Nav>
            <Nav to='features'  duration={500} smooth={true}>Features</Nav>
          </NavHolder>
        </Wrapper>
      </Container>
      )}
    </div>
  )
}

export default Header


const Nav = styled(Link)`
margin:0px 5px;
cursor: pointer;
`

const NavHolder = styled.div`
display: flex;

`

const Logo = styled.div`

`

const Wrapper = styled.div`
width: 80%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div<{props: string, col: string}>`
height: 70px;
width: 100%;
background-color: ${({props}) => props};
color: ${({col}) => col};
display: flex;
align-items: center;
justify-content: center;
position: fixed;
transition: all 350ms ease-in-out;
`