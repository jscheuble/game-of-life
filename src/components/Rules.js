import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 20%;
    font-size: 20px;
    padding: 5%;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ListItem = styled.li`
    border-bottom: 2px solid #00DAD9;
    margin-bottom: 3%;
    padding-bottom: 3%;
`;

const Rules = props => {
    return (
        <div className='popup-container'>
            <Container className='popup' id='rules'>
                <TitleWrapper>
                    <h4 style={{ textAlign: 'center' }}>Rules</h4>
                    <span onClick={() => props.setRules(false)}>&#x2612;</span>
                </TitleWrapper>
                <ul>
                    <ListItem>Any live cell with 2 or 3 live neighbors survives to the next generation.</ListItem>
                    <ListItem>Any dead cell with exactly 3 live neighbors becomes a live cell</ListItem>
                    <ListItem>All other live cells die in the next generation.</ListItem>
                </ul>
            </Container >
        </div>
    )
}

export default Rules;