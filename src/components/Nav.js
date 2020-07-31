import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
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

const Title = styled.h1`
    align-self: center;
`;

const Nav = props => {

    return (
        <Container>
            <Title className='heading'>&#10036; The Game of Life &#10036;</Title>
            <NavContainer>
                <span className='link' onClick={() => props.about ? undefined : props.setRules(true)}>Rules</span>
                <span className='link' onClick={() => props.rules ? undefined : props.setAbout(true)}>About</span>
            </NavContainer>
        </Container>
    )
}

export default Nav;