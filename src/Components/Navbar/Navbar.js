import React from "react";
import styled from "styled-components";
import ImgSrc from '../../static/images/logo.png'
import {Link} from 'react-router-dom'


// const StyledContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   background-color: #000;
//   height: fit-content;
//   width: 100%;
//   padding: 10px;
// `;

// const StyledLinksContainer = styled.div`
//   margin-top: 0px;
//   height: 40px;
//   width: 100%;
//   direction: rtl;
// `;

// const StyledList = styled.ul`
//   display: flex;
//   margin: 0;
//   padding: 0;
//   position: relative;
//   width: 100%;
// `;

// const StyledItem = styled.li`
//   list-style-type: none;
//   display: inline-block;
//   width: 14%;
//   padding: 0;
//   margin: 0;
//   text-align: center;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   text-rendering: geometricPrecision;
//   position: relative;
//   display: block;
//   width: 100%;
//   height: 100%;
//   line-height: 40px;
//   color: #fff;
//   font-family: ProximaNova;
//   font-size: 20px;
//   transition: transform 0.2s cubic-bezier(0.55, 0, 0.55, 0.2),
//     color 0.2s cubic-bezier(0.55, 0, 0.55, 0.2);
//   transform-origin: 50% 75%;

//   &:hover {
//     color: white;
//     transform: scale(1.2);
//     text-decoration: none;
//   }
// `;
// const ImgContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-left: 30px;
// `;
// const Logo = styled.img`
//   width: 432px;
//   height: 100px;
// `;

// const Navbar =() => (
//     <StyledContainer>
//       <ImgContainer>
//         <StyledLink to="/">
//           <Logo src={ImgSrc} alt="logo" />
//         </StyledLink>
//       </ImgContainer>
//       <StyledLinksContainer>
//         <StyledList>
//           <StyledItem>
//             <StyledLink to ='/settings'>הגדרות</StyledLink>
//           </StyledItem>
//           <StyledItem>
//             <StyledLink to ='/new-project'>הוספת פרויקט חדש</StyledLink>
//           </StyledItem>
//           <StyledItem>
//             <StyledLink to ='/my-projects'>הפרויקטים שלי</StyledLink>
//           </StyledItem>
//         </StyledList>
//       </StyledLinksContainer>
//     </StyledContainer>
//   )


//   export default Navbar


const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  height: fit-content;
  width: 100%;
  padding: 10px;
`;

const StyledLinksContainer = styled.div`
  margin-top: 0px;
  height: 40px;
  width: 100%;
  direction: rtl;
`;

const StyledList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`;

const StyledItem = styled.li`
  list-style-type: none;
  display: inline-block;
  width: 17%;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-rendering: geometricPrecision;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 40px;
  color: #fff;
  font-family: ProximaNova;
  font-size: 20px;
  transition: transform 0.2s cubic-bezier(0.55, 0, 0.55, 0.2),
    color 0.2s cubic-bezier(0.55, 0, 0.55, 0.2);
  transform-origin: 50% 75%;

  &:hover {
    color: white;
    transform: scale(1.1);
    text-decoration: none;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 30px;
`;
const Logo = styled.img`
  width: 432px;
  height: 100px;
`;


export default function App() {
  return (
    <StyledContainer>
      <ImgContainer>
        <StyledLink to="/">
          <Logo src={ImgSrc} alt="logo" />
        </StyledLink>
      </ImgContainer>
      <StyledLinksContainer>
        <StyledList>
         
          <StyledItem style={{marginRight:"40px"}} >
            <StyledLink to="/new-project">הוספת פרויקט חדש</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/settings">העדפות</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/my-projects">הפרויקטים שלי</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/contact">צור קשר</StyledLink>
          </StyledItem>
        </StyledList>
      </StyledLinksContainer>
    </StyledContainer>
  );
}