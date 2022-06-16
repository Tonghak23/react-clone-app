import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {

    const [BurgarStatus, setBurgarStatus] = useState(false);
    return (
        <Container>
            <a>
                {/* <img src='/images/logo.svg' alt='' /> */}
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightButton>
                {/* <a href="#">Shop Now</a> */}
                <a href="#">tesla account</a>
                <CustomMenu onClick={()=>setBurgarStatus(true)}/>
            </RightButton>
            {/* <BugarNav show={BurgarStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgarStatus(false)}/>
                </CloseWrapper>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                
            </BugarNav> */}
        </Container>
    )
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    display: flex;
    background-color: #2c3e50;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
        a {
            font-weight: 600;
            padding: 0 10px;
            float: left;
            flex-wrap: nowrap;
            text-transform: uppercase;
            color: white;
            font-family: 'Varela Round', sans-serif;
        }
        @media(max-width: 768px) {
            display: none;
        } 
`
const RightButton = styled.div`
    display: flex;
    align-items: center;

          a {
            font-weight: 600;
            padding: 0 10px;
            float: left;
            flex-wrap: nowrap;
            text-transform: uppercase;
            color: white;
            font-family: 'Varela Round', sans-serif;
        }

`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    font-size: 34px;
`
const BugarNav = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    position: fixed;
    width: 250px;
    z-index: 2;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    /* transform: ${props => props.show ? 'translateX(0)' : 'translate(100%)'}; */
    transition: transform 0.5s;
        li {
            padding: 15px 0;
            border-bottom: 1px solid rgb(0,0,0, .2);
        }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`