import React from 'react'
import styled from 'styled-components'
import ImgSrc from '../../static/images/logo.png'
import Comment from '../Comments'
import {Link} from 'react-router-dom'


const Container = styled.div`
    display: flex;
    margin: 0;
    width: 100%
    background-color: #000;
    justify-content: space-between;
    align-items: center;
`;

const StyledList =styled.ul`
    list-style-type:none;
    display: flex;
    margin: 20px;
    width:50%;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`;

const Links=styled.div`
    display: flex;
    margin: 20px;
    width:50%;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`;

const StyledLink = styled(Link)`
    padding: 20px;
    color: #fff;
`;

const Logo =styled.img`
    width: 432px;
    height: 100px;
`;




const Navbar = () => {
    return (
        <Container> 
            <Comment>Navbar container</Comment>
            <Link to = "/">
                <Logo src = {ImgSrc} alt ="logo" />
            </Link>
            <StyledList>
                <li>
                    <StyledLink to ='/new-project'>הוספת פרויקט חדש</StyledLink>
                </li>
                <li>
                    <StyledLink to ='/my-projects'>הפרויקטים שלי</StyledLink>
                </li>
                <li>
                    <StyledLink to ='/settings'>הגדרות</StyledLink>
                </li>
            </StyledList>
            <Comment>end of Navbar container</Comment>
        </Container>
    )
}

export default Navbar