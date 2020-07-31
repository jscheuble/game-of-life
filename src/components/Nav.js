import React from 'react'
import styled from 'styled-components'

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

const Nav = props => {

    return (
        <Container>
            <h1 className='heading'>&#10036; The Game of Life &#10036;</h1>
            <NavContainer>
                <span className='link' onClick={() => props.setRules(true)}>Rules</span>
                <span className='link'>About</span>
            </NavContainer>
        </Container>
    )
}

export default Nav;