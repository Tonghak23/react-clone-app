import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function Section(props) {
    return (
        <Wrap bgIMG={props.backgroundIMG}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
           </Fade>
            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                    <LeftButton>{props.leftBtnText}</LeftButton>
                    {props.rigthBtnText && 
                        <RigthButton>{props.rigthBtnText}</RigthButton>
                    }
                    </ButtonGroup>
                </Fade>   
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section;
const Wrap = styled.div`
    height: 100vh;
    width: 100vw; 
    /* background-image: url("/images/model-s.jpg"); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgIMG}")`}
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 50px;
    cursor: pointer;
    @media(max-width: 768px) {
        flex-direction: column;
    }

`
const LeftButton = styled.div`
    width: 256px;
    height: 40px;
    background-color: #2c3e50;
    justify-content: center;
    display: flex;
    color: white;
    align-items: center;
    /* opacity: 0.9; */
    border-radius: 80px;
    text-transform: uppercase;
    margin: 5px;

`

const RigthButton = styled(LeftButton)`
    color: #2c3e50;
    background-color: white;
`
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`

`
