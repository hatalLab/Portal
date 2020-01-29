import React, {Component} from 'react'
import styled from 'styled-components'
import plus from '../static/images/plus.png'
import minus from '../static/images/minus.png'


const Container= styled.div`
    display: flex;
    flex-direction: row;
`
const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;    
height:35px;
    width: 35px;
    cursor: pointer;
`

const Image = styled.img`
margin-top: 10px;
    width: 20px;
    height: 20px;
`

const StyledTable =styled.table`
color: #212529;
direction: rtl;
margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 2px;
  margin-bottom: 100px;
`
const Td=styled.td`
border: 1px solid  #dee2e6;
border-bottom: 2px solid #dee2e6;
border-collapse: collapse;
text-align: center;
`
const Th= styled.th`
border: 1px solid #dee2e6;
border-bottom: 2px solid #dee2e6;
  border-collapse: collapse;
  padding: 10px;
`

const Input = styled.input`
    height: 100%;
    padding: 10px;
    border: none;
    text-align: center;
    &: focus{
        text-align: start;
    }
`

class Table extends Component {
    constructor(){
        super()
        this.state = {
            Table: [],
            input: [{
                Col0:"",
                Col1:"",
                Col2:"",
                Col3:"",
            }],
            value: ""
        }
        this.addition=this.handleRows.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleRows(event, method){
        console.log({state: this.state.input,table: this.state.Table});
        if(method === "addition"){
                    this.setState({
                input: [...this.state.input, { 
                                                Col0:"",
                                                Col1:"",
                                                Col2:"",
                                                Col3:"",}]
            })
        }
    }

    // control value of every input in the table
    
    handleChange(event) {
        let { name, value } = event.target
        let numberPattern = /\d+/g, row, col, propertyName
        // extract the number of the row and col
        row = name.match(numberPattern)[0]
        col = name.match(numberPattern)[1]
        // store the target col
        propertyName= "Col"+col
        // copy the input 
        let newInput = [...this.state.input]
        console.log({name,value,row,col,newInput,length: this.state.input.length});
        console.log({oldValue:newInput[row][propertyName]});
            newInput[row][propertyName] = value
            this.setState({
                input: newInput
            }, console.log({input: this.state.input}))
    }    

    render(){
        let TableList = this.state.input.map((row,index) => {
            return (
                <tr key={index}>
                    <Td>{index}</Td>
                    <Td><Input name = {`Row${index}Col0`} type = "text" value = {row.Col0} onChange={this.handleChange} /> </Td>
                    <Td><Input name = {`Row${index}Col1`} type = "text" value = {row.Col1} onChange={this.handleChange} /> </Td>
                    <Td><Input name = {`Row${index}Col2`} type = "text" value = {row.Col2} onChange={this.handleChange} /> </Td>
                    <Td><Input name = {`Row${index}Col3`} type = "text" value = {row.Col3} onChange={this.handleChange} /> </Td>
                </tr>
            )
        })
        return (

<Container>
    <ImageContainer onClick = {(e) => this.handleRows(e,"addition")} >
        <Image src = {plus} alt="plus" title="הוספת שורה" />
    </ImageContainer>
<StyledTable>
            <thead>
                <tr>
                    <Th>שלב</Th>
                    <Th>תיאור המשימה בשלב זה</Th>
                    <Th>כ"א נדרש</Th>
                    <Th>כלים נדרשים</Th>
                    <Th>זמן להשלמה</Th>
                </tr>
            </thead>
            <tbody>
                {TableList}
            </tbody>
        </StyledTable>
</Container>


        )
    }
} 

export default Table