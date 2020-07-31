import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.header`
    margin-bottom: 1%;
    padding: 0.5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const NavContainer = styled.nav`
    display: flex;
    width: 25%;
    justify-content: flex-end;
`;

const Nav = () => {

    return (
        <Container>
            <h1 className='heading'>&#10036; The Game of Life &#10036;</h1>
            <NavContainer>
                <Link>Rules</Link>
                <Link>About</Link>
            </NavContainer>
        </Container>
    )
}

export default Nav;