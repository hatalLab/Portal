import React from 'react'
//import ProjectList from '../Components/Project_List/BindDataProject'
import Navbar from '../Components/Navbar/Navbar'
import Comment from '../Components/Comments'
//import {Switch, Route} from "react-router-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './Home'
import MyProjects from './MyProjects'
import Settings from './Settings'
import NewProject from './NewProject'

function Router(){
    return (
        <BrowserRouter>
                            <Navbar />
                <Switch>
                   
                    <Route exact path = "/">
                        <HomePage />
                    </Route>
                    <Route path = "/my-projects">
                        <MyProjects />
                    </Route>
                    
                    <Route path = "/settings">
                        <Settings />
                    </Route>

                    <Route path = "/new-project">
                        <NewProject />
                    </Route>
                </Switch>

            </BrowserRouter>
    )
}

export default Router