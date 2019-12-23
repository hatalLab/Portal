import React from 'react'
import List from './project_list'
import './style.css'

function bind_project_list(){
let items =[]
    for(let j=0;j<100;j++){
        items.push(<List key ={j} />)
    }

    return (
        <div className="container">
            <div className="my_project">
                <ul id = "project_list">
                    {items}
                </ul>
            </div>
        </div>
    )
}

export default bind_project_list