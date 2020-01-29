import React from 'react'
import {
    AwesomeButton,
    AwesomeButtonProgress,
  } from "react-awesome-button"
  import "react-awesome-button/src/styles/themes/theme-c137";

// class Try extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             input: ""
//         }
//         this.handleClick=this.handleClick.bind(this)
//         this.handleLog=this.handleLog.bind(this)
//     }
//     handleClick(event){
//         console.log(event);
        
//         this.setState({
//             input:"xyz",
//             sec: "new"
//         })
//     }
//     handleLog(event){
//         console.log(event);
//         let data =this.state
//         console.log(data);
//     }
//     render(){
//        return (
//         <div>
//         <AwesomeButton type="secondary" onPress = {this.handleLog} >
//                     print 
//                 </AwesomeButton>
//                     <AwesomeButtonProgress
//                         type="primary"
//                         size="medium"
//                         resultLabel="נשלח!"
//                         releaseDelay={600}
//                         ripple={true}
//                         onPress={(element, next) => {
//                         setTimeout(() => {
//                             this.handleClick(element)
//                             next();
//                         }, 600);
//                         }}
//                             >
//                         להצטרפות
//                     </AwesomeButtonProgress>
//         </div>   
//        ) 
//     }
// }


// export default Try

// import React from "react";
import {Link} from 'react-router-dom'

import styled from "styled-components";
import ImgSrc from '../static/images/logo.png'
// import "./styles.css";

const Container=styled.div`
  margin-top: 150px;
`
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
      <Container>

    <StyledContainer>
      <ImgContainer>
        <StyledLink to="/">
          <Logo src={ImgSrc} alt="logo" />
        </StyledLink>
      </ImgContainer>
      <StyledLinksContainer>
        <StyledList>
          <StyledItem>
            <StyledLink to="/news">הגדרות</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/servers">הוספת פרויקט חדש</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/donate">העדפות</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/bans">הפרויקטים שלי</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/support">צור קשר</StyledLink>
          </StyledItem>
        </StyledList>
      </StyledLinksContainer>
    </StyledContainer>
      </Container>
  );
}
