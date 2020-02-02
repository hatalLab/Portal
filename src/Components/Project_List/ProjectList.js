// import React, { Component } from 'react'
// import styled from 'styled-components'
// import ModalPage from '../Components/Project_List/Modal'


// // styled components

// // main container
// const HomeContainer =styled.div`
//     direction: rtl;`

// // the search project component 
// const StyledInput =styled.input`
//     size:"35";`

// /*Background and Modal open is used for modal that containing therest of the categories*/

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

//     class ProjectList extends Component{  
//         constructor(){
//             super()
//             this.state = {
        
//                 // projectObject  contain list of objects each of them has the jsx element, categories and the user's level of interest in that project (based on the FavoriteTags).
//                 projectObject: [],
        
//                 // ShownProjectList contain only jsx elements that are shown on the screen
//                 ShownProjectList: [],
        
//                 // input contain the search field value
//                 input: "",
                
//                 overflow: false
//             }
//             this.handleChange=this.handleChange.bind(this)
//             // this.handleOverflow=this.handleOverflow.bind(this)
//         }
    
//         componentDidMount(){
            
//         }
    
//         componentDidUpdate(prevProps){
//             if(this.state.ShownProjectList.length === 0 && this.prevProps.projectsData.length > 0){
//                 this.initializeComponent()
//             }
//         }

//         initializeComponent(){
//             this.setState({
//                 projectObject: this.props.projectsObject,
//                 ShownProjectList: this.props.projectslist
//             })
//         }

//         // handle change in the input field
//         handleChange (event){
//             event.preventDefault();
//             const {name, value, type, innerText} = event.target
//             console.log(innerText);
//             if(type){
//                 this.setState({
//                     input:value
//                 },this.filter(value))
//             } else {
//                 this.setState({
//                     activeCategories: name
//                 }, this.filter(name))
//             }
//         }
    
//         // filter the shown project list
//         filter = (value) => {
//             let list=[]
//             if(value === "all"){
//                 list = sortProjects(this.state.projectObject.slice()).map(item => item.project) 
//                 this.setState(
//                     {
//                         ShownProjectList: list
//                     }
//                 )
//             } else {
//                 let newProjectObj = this.state.projectObject.filter(item => item.categories.findIndex(str => str === value) > -1)
//                 sortProjects(newProjectObj)
//                 list = newProjectObj.map(item => item.project)
//                 this.setState(
//                     {
//                         ShownProjectList: list,
//                     }
//                 )
//             }
//         }
//         render(){
//             return(
//                 <HomeContainer>
//                                 <StyledInput name = "search" placeholder = " חפש קטגוריה" value = {this.state.input} onChange = {this.handleChange} />
//                 <StyledContainer id ="project_list" overfl={this.state.overflow} > {/*styled component */}
//                     <StyledList id="mix_wrapper"> {/*styled component */}
//                         {this.state.ShownProjectList} {/*project list */}
//                     </StyledList>
//                 </StyledContainer>
//                 </HomeContainer>
//     )
//         }
//     }
    
//     const sortProjects = (obj) => {
//         let list = obj.sort((item1, item2) => item1.interest - item2.interest)
//         return list
//     }
    
//     export default ProjectList