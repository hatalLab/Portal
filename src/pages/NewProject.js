import React from 'react'
import styled from 'styled-components'
import Comment from '../Components/Comments'
import Img_Src from '../static/images/project-default.png'

const StyledContainer = styled.div`
    display: flex;
    width: 90%
    direction: rtl;
    margin: 100px auto;
`

const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    direction: rtl;
    padding: 10px;
`
const StyledCol = styled(StyledRow)`
    flex-direction: column;
`

const StyledImgContainer = styled.div`
    position: relative;

    &:hover .image {
        opacity: 0.3;
    }

    &:hover .middle {
        opacity: 1;
    }
`
const StyledImg =styled.img`
    opacity: 1;
    display: block;
    width: 300px;
    height: 300px;
    transition: .5s ease;
    backface-visibility: hidden; 
`

// middle
const StyledMiddle = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%); 
`
const StyledEdit = styled.div`
    display: flex;
    justify-content: center;
    background-color: #2f2f2f;
    color: #fff;
    font-size: 18px;
    & > * {
        align-self:center;
    }
`
const StyledHeading = styled.h4`
    display: flex;
    flex-direction: row;
`

const StyledInput =styled.input`
    visibility: hidden;
`

const UploadImage = () => {
    return (
        <StyledContainer>
            <StyledRow>
                <label id = "img_label" htmlFor = "id_img">
                    <StyledImgContainer>
                        <StyledImg className = "image" id ="project_pic" title = "הוספת תמונה לפרויקט" src = {Img_Src} alt = "upload picture" />
                        <StyledMiddle className = "middle">
                            <StyledEdit>
                                {/* <StyledRow>  */}
                                    <p>
                                    &#x1f589; &nbsp; העלאת תמונה &nbsp; </p>
                                    {/* </StyledRow> */}
                                    
                            </StyledEdit>
                        </StyledMiddle>
                    </StyledImgContainer>
                </label>
                <StyledInput type = "file" name = "img" id = "id_img" accept = "image/*" required />
            </StyledRow>            
        </StyledContainer>
    )
   }

function HomePage(){
    return (
        <StyledContainer>
        <Comment>HomePage ./src/pages/homePage.js</Comment>
           <StyledHeading>הוספת פרויקט חדש</StyledHeading>
            <UploadImage />
        </StyledContainer>
    )
}



export default HomePage