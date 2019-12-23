import React from 'react'
import ProjectList from '../Components/Project_List/BindDataProject'
//import Navbar from '../Components/Navbar/Navbar'
import Comment from '../Components/Comments'
//import {Switch, Route} from "react-router-dom";
//import BindProjectList from '../Components/Project_List/BindDataProject';

function HomePage(){
    return (
        <>
        {/* <Comment>HomePage ./src/pages/homePage.js</Comment> */}
            <ProjectList />
        </>
    )
}

export default HomePage