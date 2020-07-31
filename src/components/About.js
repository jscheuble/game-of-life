import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const About = props => {
    return (
        <div className='popup-container'>
            <div className='popup' id='about'>
                <TitleWrapper>
                    <h4 style={{ fontSize: '20px' }} >About The Game of Life</h4>
                    <span className='close-btn' onClick={() => props.setAbout(false)}>&#x2612;</span>
                </TitleWrapper>
                <p>The Game of Life was created in 1970 by John Horton Conway. The game operates as a cellular automaton, requiring no physical players.</p>
                <p>Conway was on determined to create an unpredictable cellular automaton. He had specific intentions for the rules to abide by the following criteria</p>
                <ul>
                    <li>There should be no explosive growth</li>
                    <li>There should exist small initial patterns with chaotic, unpredictable outcomes</li>
                    <li>The rules should be as simple as possible, while following the above constraints</li>
                </ul>
                <p>Since Conway's Game of Life reached the public, it has become widely popular in many different scientific fields, including Computer Science.</p>
            </div>
        </div>
    )
}

export default About;