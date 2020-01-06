import React from 'react'
import styled from 'styled-components'
import Img from '../../static/images/project-default.png'


const StyledContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 100px auto;
`;

const StyledRow = styled.div`
    display: flex;
    justify-contnt: space-between;
    flex-direction: row;
    direction: rtl;
    padding: 10px;
`;

const StyledCol = styled(StyledRow)`
    flex-direction: column;
`;

const StyledImgContainer = styled.div`
    position: relative;

    &:hover .image {
        opacity: 0.3;
    }

    &:hover .middle {
        opacity: 1;
    }
`;

const StyledImg = styled.img`
    opacity: 1;
    display: block;
    width: 300px;
    height: 300px;
    transition: .5s ease;
    backface-visibility: hidden;
`;

const Middle =styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`;

const Edit = styled.div`
    background-color: #2f2f2f;
    color: #fff;
    font-size: 18px;
`;

const UploadImg = () =>{
    return (
        <StyledContainer>
            <StyledRow>
                <label id = "img_label" htmlFor = "id_img">
                    <StyledImgContainer>
                        <StyledImg className = "image" id ="def_pic" title = "הוספת תמונה לפרויקט" src = {Img} alt = "הוספת תמונה" />
                        <Middle className = "middle">
                            <Edit>
                                העלאת תמונה &#x1F589;
                            </Edit>
                        </Middle>
                    </StyledImgContainer>
                </label>
                <input type = 'file' name = 'img' style = {{visibility: "hidden"}} accept="image/*" required id = "id_img" />
            </StyledRow>
        </StyledContainer>
    )
}

