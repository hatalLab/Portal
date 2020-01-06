import React, {Component, useRef, forwardRef} from 'react'
import ProjectList from '../Components/Project_List/BindDataProject'
import styled from 'styled-components'
import Modal from '../Components/Project_List/Modal'
import "react-awesome-button/dist/styles.css";
import Home from './Home'

const CategoriesContainer = styled.div`
    dispaly: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px;
`;

const StyledLink=styled.a`
    color: black;
    padding: 40px;
    font-size:25px;
`;

// class Tags extends Component {
//     state = {
//         activeTags: [],
//         allTags:""
//     }

//     setActiveTags = (e) => {
//         console.log(e);
        
//     }
//     componentDidMount(){
//         const tags=initialize()
//         this.setState({allTags:tags})
//     }

//     setActiveTags = (e) => {
//         e.preventDefault()
//         e.stopPropagation()
//         const newTags = [...this.state.activeTags]
//         newTags.push(e.target.id)
//         this.setState({
//             activeTags:newTags
//         },() => filterList(this.state.activeTags))
//     }

//     render(){
//         const tags = this.state.allTags
//         const Categories=[]
//         for (let tag of tags){
//             Categories.push(<StyledLink id= {tag} href = "/" key={tag} onClick = {this.setActiveTags}>{tag}</StyledLink>)
//         }
//         return (
//             <CategoriesContainer>
//                 {Categories}
//             </CategoriesContainer>
//         )
//     }
//     }


// function initialize(){
//     return tags
// }

// function filterList(tags){

// console.log(tags || "got to filterList");

// }

// let tags=['פיזיקה','מדמח','מתמטיקה','סייסמיקה','הנדסת חשמל','הנדסת מכונות']

const HomePage = () => {
    // const listRef = useRef(null)
    return (
        <>
        {/* <Tags /> */}
        {/* <Comment>HomePage ./src/pages/homePage.js</Comment> */}
            {/* <ProjectList  /> */}
            {/* <Modal /> */}
            <Home />
        </>
    )
}

export default HomePage