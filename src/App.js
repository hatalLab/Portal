import React from 'react'
import { Label,Button } from 'semantic-ui-react'

import './App.css'
const arr =["programming","c","c++","java","c#","react","react native","java script"]
const arr1=[
"html","d3","php","ruby",
"swift","jquery","sql","python","unity","matlab",
"raspberry ip","type script","data script","flask",
"r","vue","arduino","net","computer vision","chemistry",
"augmented reality","artificial intlligence","engineering",
"electronics","electro optic","electric","drone","physics",
"optic","mechanics","mathematics","symfony","robtics"]
function Wrapper(){
  let list =[]
  for(let tag of arr){
    list.push(
      <Label as='a' image> 
  <Button  onClick={(e) => console.log(`${tag}`)} >
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
     <Button onClick={(e) => console.log(`${tag}`)} >
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
