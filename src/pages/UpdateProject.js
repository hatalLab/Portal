import React from 'react'
import NewProject from './NewProject'
import ImageSrc from '../static/images/avatar.png'
import { useLocation, useHistory, useParams, useRouteMatch } from 'react-router-dom'


function UpdateProject(){
    let location = useLocation()
    let history = useHistory()
    let params = useParams()
    let RouteMatch = useRouteMatch()
    // console.log( { location, history, params, RouteMatch } );
    let i = 0;
    if(i===0 && location.data === undefined){
        history.goBack()
        // console.log('go back');
        
    }
    const { data } = location
    
    
    return ( 
        <NewProject edit name = {data.front_title} platoon = {data.platoon} image ={ImageSrc} description = {data.description} details = {data.details} categories = {data.categories}  />
     )
}

export default UpdateProject