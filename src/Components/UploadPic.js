import React, { Component } from 'react'
import styled from 'styled-components'
//import Comment from '../Components/Comments'
import Img_Src from '../static/images/project-default.png'

// styled components

const StyledContainer = styled.div `
    display: flex;
    width: 90%
    direction: rtl;
    margin: 100px auto;
`

const StyledRow = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    direction: rtl;
    padding: 10px;`

    
const StyledCol=styled.div`
    display: flex;
    flex-direction: column;
    dir:rtl;
    padding:10px;
    justify-content: center`

const StyledImgContainer = styled.div `
    position: relative;

    &:hover .image {
        opacity: 0.3;
    }

    &:hover .middle {
        opacity: 1;
    }
`
const ImageStyle = {
    opacity: 1,
    display: "block",
    width: "300px",
    transition: ".5s ease",
    backfaceVisibility: "hidden"
}

// middle
const StyledMiddle = styled.div `
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%); 
`
const StyledEdit = styled.div `
    display: flex;
    justify-content: flex-end;
    background-color: #2f2f2f;
    color: #fff;
    font-size: 18px;
    & > * {
        align-self:center;
    }
`

const StyledInput = styled.input `
    visibility: hidden;
    opacity: 0;
    width:0;
    height: 0;`

const StyledP = styled.p `
    padding: 12px 5px 0 5px;`

const StyledCenteredP =styled.p`
    align-self: center;`

class UploadImage extends Component {
    constructor() {
        super()
        this.state = {

            // file conains the imageto be shown
            file: Img_Src,
            loaded: false,
            fileName: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        // change file to the selected image 
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
            loaded: true,
            fileName: event.target.files[0].name
            }
            )
            this.props.form.setFieldValue('input',event.currentTarget.files[0])
    }

    render() {
        return (
                    <StyledRow className="StyledRow" >
                        <label id = "img_label" htmlFor = "id_img" >
                            <StyledImgContainer className = "StyledImgContainer">
                                <StyledCol className="StyledCol">
                                    <img className = "image" id = "project_pic" title = "הוספת תמונה לפרויקט" src = { this.state.file } alt = "העלאת תמונה לפרויקט" style = { ImageStyle } /> 
                                    {this.state.loaded && <StyledCenteredP>{this.state.fileName}</StyledCenteredP>}
                                </StyledCol>
                                <StyledMiddle className = "middle" >
                                    <StyledEdit>
                                        <div>
                                            <StyledP> &#x1f589; העלאת תמונה </StyledP>  
                                        </div>
                                    </StyledEdit>
                                </StyledMiddle>
                            </StyledImgContainer>
                        </label>
                        <StyledInput type = "file" name = "img" id = "id_img" accept = "image/*" required onChange = { this.handleChange }  {...this.props} />
                    </StyledRow>
        )
    }
}

export default UploadImage
