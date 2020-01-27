import React from 'react'
import {
    AwesomeButton,
    AwesomeButtonProgress,
  } from "react-awesome-button"
  import "react-awesome-button/src/styles/themes/theme-c137";

class Try extends React.Component {
    constructor(){
        super()
        this.state={
            input: ""
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleLog=this.handleLog.bind(this)
    }
    handleClick(event){
        console.log(event);
        
        this.setState({
            input:"xyz",
            sec: "new"
        })
    }
    handleLog(event){
        console.log(event);
        let data =this.state
        console.log(data);
    }
    render(){
       return (
        <div>
        <AwesomeButton type="secondary" onPress = {this.handleLog} >
                    print 
                </AwesomeButton>
                    <AwesomeButtonProgress
                        type="primary"
                        size="medium"
                        resultLabel="נשלח!"
                        releaseDelay={600}
                        ripple={true}
                        onPress={(element, next) => {
                        setTimeout(() => {
                            this.handleClick(element)
                            next();
                        }, 600);
                        }}
                            >
                        להצטרפות
                    </AwesomeButtonProgress>
        </div>   
       ) 
    }
}


export default Try