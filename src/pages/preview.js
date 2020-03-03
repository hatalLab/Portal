import React from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import ModalPage from '../Components/Project_List/Modal'
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button"
import "react-awesome-button/src/styles/themes/theme-c137";


const StyledProjectContainer = styled.div`
    width: 250px;
`

const StyledLi = styled.li`
    text-align: center;`

    const StyledNameContainer  = styled.p`
    text-align: center;
    padding: 10px 0;
    position: relative;
    overflow-y: hidden;
    width: 250px;
    height: 60px;
`

function Preview (){
    const location = useLocation()
    const history = useHistory()
    const { data: project } = location

    console.log(project)

    return(
        <>
            <StyledProjectContainer key= {project.Project_id}>
                <StyledLi className = {project.categories} id ="mix_target" >
                    <ModalPage  data = {project} />
                </StyledLi>
                <StyledNameContainer>
                    { project.front_title.length < 50 ? project.front_title : project.front_title.slice(0,45) + "..."}
                </StyledNameContainer>
            </StyledProjectContainer>

            <AwesomeButton type = "primary" onPress={() => history.goBack()}>
                    סגירה
            </AwesomeButton>
        </>   
)
}

export default Preview