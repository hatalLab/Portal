import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './Home'
import MyProjects from './MyProjects'
import Settings from './Settings'
import NewProject from './NewProject'
import Contact from './ContactUs'



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
                    <Route path = "/contact">
                        <Contact />
                    </Route>
                </Switch>

            </BrowserRouter>
    )
}

export default Router