import React from 'react'
import { Label,Button } from 'semantic-ui-react'
import styled, { css } from 'styled-components'
import './App.css'
const arr =["programming","c","c++","java","c#","java_script","react","react_native"]
const arr1=[
"html","d3","php","ruby",
"swift","jquery","sql","python","unity","matlab",
"raspberry_ip","typescript","data_script","flask",
"r","vue","arduino","net","computer_vision","chemistry",
"augmented_reality","artificial_intlligence","engineering",
"electronics","electro_optic","electric","drone","physics",
"optic","mechanics","mathematics","symfony","robtics"]

function Wrapper(){
  let list =[]
  for(let tag of arr){
    list.push(
   
      <Label as='a' image> 
    <Button>
      <img src={`${tag}.png`} alt={`${tag}`} />
       {tag}
       </Button>
        </Label>  
    )
  }
  return  list
}
function Wrapper1(){
 
  let list1=[]
  for(let tag of arr1){
    list1.push(
      <Label as='a' image> 
      <Button>   
      <img src={`${tag}.png`} alt={`${tag}`} />
       {tag}
       </Button> 
        </Label>  
    )
  }
  return list1
}

function App(){
 
  let list2 = Wrapper()
  let list3=Wrapper1()
  return (   
<div>
  <div>
    {list2}
    </div>
    {list3}
  </div>
  )
}


export default App;
/**
 * <Divider>= Divide the lines with a line, <label>=Makes the frame of the tags,
 */
// const LabelExampleImage = () => (
//   <div>
//   <Label.Group size='huge'>
//   <Label as='a' image>
//   <img src="programming.png" />
//    programming   
//     </Label>
    
//     <Label as='a' image>
//       <img src="c.png"/>
//       c
//     </Label>

//     <Label as='a' image>
//       <img src='c++.png' />
//       c++
//     </Label>
//     <Label as='a' image>
//       <img src="java.png" />
//       java
//     </Label>
//     <Label as='a' image>
//       <img src="cc.png" />
//      c#
//     </Label>
//     <Label as='a' image>
//       <img src='java_script.png' />
//      java script
//     </Label>
    
//     <Label as='a' image>
//       <img src='react.png' />
//     react
//     </Label>
//     <Label as='a' image>
//       <img src='react_native.webp' />
//     react native
//     </Label>
//     <Divider/>




//     <Label as='a' image>
//       <img src='html.png' />
//    html
//     </Label>
//     <Label as='a' image>
//       <img src='d3.png' />
//    d3
//     </Label>
//     <Label as='a' image>
//       <img src='php.png' />
//    php
//     </Label>
//     <Label as='a' image>
//       <img src='ruby.png' />
//    ruby
//     </Label>
//     <Label as='a' image>
//       <img src='swift.png' />
//    swift
//     </Label>
//     <Label as='a' image>
//       <img src='jquery.png' />
//    jquery
//     </Label>
//     <Label as='a' image>
//       <img src='sql.png' />
//    sql
//     </Label>
//     <Label as='a' image>
//       <img src='python.png' />
//    Python
//     </Label>
//     <Divider/>



//     <Label as='a' image>
//       <img src='unity.png' />
//   unity
//     </Label>
//     <Label as='a' image>
//       <img src='matlab.png' />
//  matlab
//     </Label>
//     <Label as='a' image>
//       <img src='raspberry_ip.png' />
//  raspberry_ip
//     </Label>
//     <Label as='a' image>
//       <img src='typescript.png' />
// type_script
//     </Label>
//     <Label as='a' image>
//       <img src='data_script.png' />
// data_script
//     </Label>
//     <Label as='a' image>
//       <img src='flask.jpg' />
// flask
//     </Label>
//     <Label as='a' image>
//       <img src='r.png' />
// r
//     </Label>
//     <Divider/>



//     <Label as='a' image>
//       <img src='vue.jpg' />
// vue
//     </Label>

//     <Label as='a' image>
//       <img src='arduino.jpg' />
// arduino
//     </Label>
//     <Label as='a' image>
//       <img src='net.png' />
// net
//     </Label>
//     <Label as='a' image>
//       <img src='computer_vision.png' />
// computer_vision
//     </Label>
//     <Label as='a' image>
//       <img src='chemistry.png' />
// chemistry
//     </Label>
//     <Label as='a' image>
//       <img src='augmented_reality.png' />
// augmented_reality
//     </Label>
//     <Divider/>


//     <Label as='a' image>
//       <img src='artificial_intlligence.png' />
// artificial_intelligence
//     </Label>
//     <Label as='a' image>
//       <img src='engineering.jpg' />
// engineering
//     </Label>
//     <Label as='a' image>
//       <img src='electronics.png' />
// electronics
//     </Label>
//     <Label as='a' image>
//       <img src='electro_optic.jpg' />
// electro_optic
//     </Label>
//     <Label as='a' image>
//       <img src='electric.png' />
// electric
//     </Label>
//     <Label as='a' image>
//       <img src='drone.png' />
// drone
//     </Label>
//     <Divider/>


    
//     <Label as='a' image>
//       <img src='physics.png' />
// physics
//     </Label>
//     <Label as='a' image>
//       <img src='optic.png' />
// optic
//     </Label>
//     <Label as='a' image>
//       <img src='mechanics.png' />
// mechanics
//     </Label>
//    <Button> <Label as='a' image>
//      <img src='mathematics.png' />
// mathematics
//     </Label></Button>
//     <Label as='a' image>
//       <img src='symfony.png' />
// symfony
//     </Label>
//     <Label as='a' image>
//       <img src='robtics.png' />
// robtics
//     </Label>
    
//     </Label.Group>
//   </div>
// )

// // export default LabelExampleImage
