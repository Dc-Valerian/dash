import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"

const Header = () => {
    return (
        <Container>
            <Main>
                <Name>Peter Oti</Name>
                <SearchHold>
                    <SearchIcon />
                    <Search placeholder='Search' />
                </SearchHold>
                <Holder>
                    <Not />
                    <Profile></Profile>
                    <div>
                        <Big>Peter Oti</Big>
                        <Small>Admin</Small>
                    </div>
                </Holder>
            </Main>
        </Container>
    )
}

export default Header

const Main = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Profile = styled.div`
height: 45px;
width: 45px;
border-radius: 50%;
margin:0 15px;
background-color: black;
`;

const Not = styled(IoIosNotifications)`
font-size: 30px;
`;

const Big = styled.div`
font-size: 18px;
`;

const Small = styled.div`
font-size: 12px;
`;

const Holder = styled.div`
display: flex;
align-items: center;
`;


const Search = styled.input`
color: white;
border-radius: 10px;
padding: 10px 15px;
outline: none;
border: none;
margin-left: 10px;

`;

const SearchIcon = styled(AiOutlineSearch)`
font-size: 30px;
color: black;
`;

const SearchHold = styled.div`
align-items: center;

height: 40px;
background-color: transparent;
display: flex;

`;

const Container = styled.div`
height: 80px;
width: 100%;
background-color: red;
display: flex;
justify-content: center;
align-items: center;
/* color: black */
`
const Name = styled.div`
`


