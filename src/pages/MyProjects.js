import React from 'react'
import styled from 'styled-components'
import Modal from '../Components/Project_List/Modal'
import { MyProjects as projects } from '../static/data/rowData'
import Home from '../Components/Project_List/ProjectList'

const Container = styled.div`
    display: flex;
`
// function initializeProjects(){
//     let list=[]
//     for(let i=0;i<5;i++){
// list.push(<Modal key={i} data = {projectsData[i]} />)
//     }
//     return list
// }

function MyProject(){
    // let listOfProjects=[] = initializeProjects()
    return (
        <Container>
           My projects
            {/* <Modal data = {projects} /> */}
        </Container>
    )
}

export default MyProject