import React from 'react'
import { Label,Button } from 'semantic-ui-react'

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
let i = 0
  for(let tag of arr){
    list.push(
      <Label as='a' image> 
  <Button key={i} onClick={(e) => console.log(e.target)} >
    <img src={`${tag}.png`} alt={`${tag}`} />
       {tag}
       </Button>
        </Label>  
    )
    i++
  }
  return  list
}
function Wrapper1(){
 let i = 0;
  let list1=[]
  for(let tag of arr1){
    list1.push(
      <Label as='a' image> 
     <Button key={i} onClick={(e) => console.log(e.target)} >
      <img src={`${tag}.png`} alt={`${tag}`} />
       {tag}
       </Button>
        </Label>  
    )
    i++
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
