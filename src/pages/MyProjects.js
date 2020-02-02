import React, { Component } from 'react'
import styled from 'styled-components'
import ModalPage from '../Components/Project_List/Modal'
import { MyProjects as ProjectsData } from '../static/data/rowData'
import UpdateProject from './UpdateProject'

const Container =styled.div`
    width: 100%;
    direction: rtl;
`
const Title = styled.h2`
    margin: 100px 100px 0;
`

// container of the project list
const StyledContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 100px auto;
    overflow: ${props => props.overfl ? "auto" : "hidden"}
    flex-wrap: wrap;`

// ul of the project list
const StyledList=styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    list-style-type: none;
    flex-direction: row-reverse;
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

const StyledProjectContainer = styled.div`
    width: 250px;
`

class MyProjects extends Component{
    constructor(){
        super()
        this.state= {
            // projectObject  contain list of objects each of them has the jsx element, categories and the user's level of interest in that project (based on the FavoriteTags).
            projectObject: [],
    
            // ShownProjectList contain only jsx elements that are shown on the screen
            ShownProjectList: [],
    
            // input contain the search field value
            input: "",
        }
        this.handleChange =this.handleChange.bind(this)
    }

    componentDidMount(){
        let list=[], ShownProjectList = []
        for(let project of  ProjectsData){
            console.log({ project });
            
            list.push({
                project: <StyledProjectContainer key = {project.Project_id}>
                            <StyledLi>
                                <ModalPage data = {project} Edit={true} EditProject = {UpdateProject} />
                            </StyledLi>
                            <StyledNameContainer>{ project.front_title.length < 50 ? project.front_title : project.front_title.slice(0,45) + "..."}</StyledNameContainer>
                        </StyledProjectContainer>,
                name: project.front_title
            })
        }
        ShownProjectList = list.map(item => item.project)
        this.setState({
            projectObject: list,
            ShownProjectList: ShownProjectList
        })
    }

    handleChange (event){
        event.preventDefault();
        const { value } = event.target
            this.setState({
                input:value
            },this.filter(value))
    }
    
    filter(value){
        let newProjectObj = this.state.projectObject.filter(item => item.name.findIndex(str => str === value) > -1)
        let list = newProjectObj.map(item => item.project)
        this.setState(
            {
                ShownProjectList: list,
            }
        )
    }
    
    render(){
        return (
            <Container>
                <Title>
                    הפרויקטים שלי
                </Title>
                <StyledContainer id="project_list">
                    <StyledList id = "mix_wrapper">
                        {this.state.ShownProjectList}
                    </StyledList>
                </StyledContainer>
            </Container>
        )
    }
}

export default MyProjects