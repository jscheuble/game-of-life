import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const About = props => {
    return (
        <div className='popup-container'>
            <div className='popup'>
                <TitleWrapper>
                    <h4>About The Game of Life</h4>
                    <span onClick={() => props.setAbout(false)}>&#x2612;</span>
                </TitleWrapper>
            </div>
        </div>
    )
}

export default About;