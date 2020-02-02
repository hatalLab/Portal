// import React, { Component, useState } from 'react'
// import styled from 'styled-components'
// import ModalPage from '../Components/Project_List/Modal'
// import { data as projectsData, tags, favoriteTags as FavoriteTags, interestedProjects } from '../static/data/rowData'
// import ProjectList from '../Components/Project_List/ProjectList'

// // styled components

// // main container
// const HomeContainer =styled.div`
//     direction: rtl;`

// // container with flex-direction of row
// const StyledRow = styled.div`
//     display: flex;
//     justify-content: space-between;
//     flex-direction: row;
//     dir:rtl;
//     padding: 10px 40px;`

// // container of all categories - categories section
// const StyledBar = styled(StyledRow)`
// margin: 50px auto 0;
// width: 80vw;
//     background-color: white;
//     padding: 0;`

// // container of every category
// const StyledTagContainer = styled.div`
//     margin: 0;
//     padding: 10px;
//     height: 100%;
//     display: flex;
//     justify-content: center;
    
//     &:hover {
//         background-color: black;
        
//         & > * {
//             color: white;
//         }
//     }`

// // the categories
// const StyledTag = styled.a`
//     padding: 0px 10px;
//     color: black;
//     text-decoration: none;
//     &:hover {
//         text-decoration: none;
//     }`

// // the search project component 
// const StyledInput =styled.input`
//     size:"35";`

// /*Background and Modal open is used for modal that containing therest of the categories*/

// // Background is outside of the modal
// const Background =styled.div`
//     z-index: 3;
//     position: fixed;
//     top: 0px;
//     left: 0px;
//     right: 0px;
//     bottom: 0px;
//     opacity: ${props => props.open ? "1" : "0"};
//     visibility: ${props => props.open ? "visible" : "hidden"};`

// // ModalOpen is the modal
// const ModalOpen = styled.div`
//     z-index: 4;
//     font-family: arial;
//     position: absolute;
//     transition: -webkit-transform 0.3s ease-out 0s;
//     will-change: transform;
//     overflow-y: auto;
//     background: white;
//     width: fit-content;
//     max-width: 80vw;
//     height: fit-content;
//     max-height: 90vh;
//     left: 50%;
//     text-align: center;
//     border: 1px solid rgba(0, 0, 0, 0.1);
//     border-radius: 0 0 10px 10px;
//     right: 0px;
//     transform: ${props => props.open ? "translateX(-50%)" : "translateY(-100%)" };
//     visibility: ${props => props.open ? "visible" : "hidden"};
//     box-shadow:rgba(0, 0, 0 ,0.15) -2px 2px 4px;
//     cursor: pointer;
    
//     & > * {
//         cursor: default;
//     }`

// // container of the project list
// const StyledContainer = styled.div`
//     display: flex;
//     width: 90%;
//     margin: 100px auto;
//     overflow: ${props => props.overfl ? "auto" : "hidden"}
//     flex-wrap: wrap;`

// // ul of the project list
// const StyledList=styled.ul`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     padding: 0;
//     list-style-type: none;
//     flex-direction: row-reverse;
// `

// const StyledLi = styled.li`
//     text-align: center;`

// // determine how many tags to show in the tags section

// const StyledArrow =styled.div`
//     cursor: pointer;
//     justify-content: center;
//     align-items: center;
//     &:hover {
//         color: white;
//     }`

// const StyledNameContainer  = styled.p`
//     text-align: center;
//     padding: 10px 0;
//     position: relative;
//     overflow-y: hidden;
//     width: 250px;
//     height: 60px;
// `

// const StyledProjectContainer = styled.div`
//     width: 250px;
// `
// const StyledWrapped =styled(StyledRow)`
//     flex-wrap: wrap;`

// let numberOfTags = 10;

// // this function is responsible for the content of the modal (insert the rest of the tags)
// const ModalContent = (props) => {
//     let list =[]
//     for(let tag of props.AllTags){
//         list.push(<StyledTagContainer key = {tag}><StyledTag onClick = {event => props.handleChange(event)} href="#">{tag}</StyledTag></StyledTagContainer>)
//     }
//     return (
//         <StyledWrapped>
//         {list}
//         </StyledWrapped>
//     )
// }

// const Modal = (props) => {
//     // state for should modal be open or not
//     const [modalShow, setModalShow] = useState(false);
//     let tagsList = [], index, restTags =[...tags]
//     tagsList.push(<StyledTagContainer  key="all" className = "container"><StyledTag onClick ={event => props.handleChange(event)} name = "all" href="#">הכל</StyledTag></StyledTagContainer>)
//     tagsList.push(<StyledTagContainer  key="favorites" className = "container"><StyledTag onClick ={event => props.handleChange(event)} name = "favorites" href="#">מועדפים</StyledTag></StyledTagContainer>)
//     tagsList.push(<StyledTagContainer  key="new" className = "container"><StyledTag onClick ={event => props.handleChange(event)} name = "new" href="#">חדש</StyledTag></StyledTagContainer>)
    
//     // insert interested tags first to tags section and remove them from restTags
//     for (let tag of FavoriteTags){
//         tagsList.push(<StyledTagContainer  key={tag} className = "container"><StyledTag onClick ={event => props.handleChange(event)} name = {tag} href="#">{tag}</StyledTag></StyledTagContainer>)
//         index=restTags.indexOf(tag)
//         restTags.splice(index,1)
//     }
//     // calculate how many tags to add to tags section and the rest will be shwon in the modal
//     let TagsToAdd = Math.abs(numberOfTags - tagsList.length)
//     // insert the rest of the tags
//     for(let i =0;i<TagsToAdd;i++){
//         tagsList.push(<StyledTagContainer  key={restTags[i]} className = "container"><StyledTag onClick ={event => props.handleChange(event)} name = {restTags[i]} href="#">{restTags[i]}</StyledTag></StyledTagContainer>)
//     }
//     // remove from rest tags the tags that we added to tags section in the last loop
//     restTags.splice(0, TagsToAdd)
//     tagsList.push(<StyledTagContainer key = "ModalOpen" onClick = {() => setModalShow(true)}> <StyledArrow>&#11167;</StyledArrow><StyledTag></StyledTag></StyledTagContainer>)
//   return (
//       <>
//         <StyledBar>
//             {tagsList}
//         </StyledBar>
//         <Background onClick = {() => setModalShow(false)} open = {modalShow} />
//         <ModalOpen open ={modalShow}>
//             <ModalContent AllTags = {restTags} handleChange={props.handleChange} />
//         </ModalOpen>
//       </>
//   )
// }

// class ControlledHomePage extends Component{  
//     constructor(){
//         super()
//         this.state = {
    
//             // CategoriesList contain all the tags
//             categoriesList: [],
    
//             // activeCategories contain all the selected categories
//             activeCategories: [],
    
//             // projectObject  contain list of objects each of them has the jsx element, categories and the user's level of interest in that project (based on the FavoriteTags).
//             projectObject: [],
    
//             // ShownProjectList contain only jsx elements that are shown on the screen
//             ShownProjectList: [],
    
//             // input contain the search field value
//             input: "",
            
//             overflow: false
//         }
//     }

//     componentDidMount(){
//         let temp=[], numberOfProjects = projectsData.length, categories, interest, index, match

//         // loop over each project in projectsData
//         for(let project of projectsData)
//         {
//             categories = project.categories
//             interest = numberOfProjects
            
//             // determining the user's level of interest in each project
//             for (let category of categories)
//             {     
//                 index = FavoriteTags.indexOf(category)
//                 if(index > -1 )
//                 {
//                     // interested projects shown first, so interest of other projects is right after
//                     interest = index + interestedProjects.length
//                 }
//             }
            
//             // set interest of interested project 
//             for(let intersted of interestedProjects)
//             {
//                 match = project.front_title.toString() === intersted
//                 if(match === true)
//                 {
//                     index = interestedProjects.indexOf(project.front_title)
//                     interest = index
//                     break
//                 }

//             }
            
//             temp.push(
//             {
//                 project: <StyledProjectContainer key= {project.Project_id}><StyledLi className = {categories} id ="mix_target" >
//                             <ModalPage  data = {project} />
//                         </StyledLi><StyledNameContainer>{ project.front_title.length < 50 ? project.front_title : project.front_title.slice(0,45) + "..."}</StyledNameContainer></StyledProjectContainer>,
//                 categories: categories,
//                 name: project.front_title,
//                 interest: interest 
//             }
//             )
//         }
        

//         // sorting by interest key and creating a list of the elements
//         let list = sortProjects(temp).map(item => item.project) 

//         this.setState(
//             {
//                 categoriesList: [...tags],
//                 activeCategories:[...tags],
//                 projectObject: temp,
//                 ShownProjectList: list
//             }
//         )
//     }

//     render(){
//         return(
//             <HomeContainer>
//                             <Modal handleChange = {this.handleChange} />
//             <ProjectList Projectslist = {this.state.ShownProjectList} projectsObject = {this.state.projectObject} />
//             </HomeContainer>
// )
//     }
// }

// const sortProjects = (obj) => {
//     let list = obj.sort((item1, item2) => item1.interest - item2.interest)
//     return list
// }




// export default ControlledHomePage