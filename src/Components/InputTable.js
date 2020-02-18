import React, {Component} from 'react'
import styled from 'styled-components'
import plus from '../static/images/plus.png'
import minus from '../static/images/minus.png'
import Bin from '../static/images/Bin.png'
import Checkbox from './Checkbox'
// import './table.css'

const Container= styled.div`
    display: flex;
    flex-direction: column;
`

const StyledTable =styled.table`
color: #212529;
direction: rtl;
margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 2px;
`

const Hr = styled.hr`
z-index:2;
`

const Td=styled.td`
border: 1px solid  #dee2e6;
border-bottom: 2px solid #dee2e6;
border-collapse: collapse;
text-align: center;
position: relative;

&:before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    border-bottom: ${props => props.selected ? '1px solid gray' : 'none'};
    width: 100%;
}
`

const Image = styled.img`
margin-top: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`
const HiddenTd = styled(Td)`
    border: none;

    &:before{
        border-bottom: none;
    }
`

const Th= styled.th`
border: 1px solid #dee2e6;
border-bottom: 2px solid #dee2e6;
  border-collapse: collapse;
  padding: 10px;
`
const HiddenTh=styled(Th)`
border: none;
`

const ImageContainer = styled(Td)`
display: flex;
justify-content: center;
align-items: center;    
    cursor: pointer;
    border: none;
    padding: 0 10px;
    &:before{
        border-bottom: none;
    }
`

const Input = styled.input`
    height: 100%;
    padding: 10px;
    border: none;
    text-align: center;
    &: focus{
        text-align: start;
    }
    color: ${props => (props.selected ? '#cdcdcd' : 'black')};
    text-decoration: ${props => props.selected ? 'line-through' : 'none' };
`

const StyledErrorMessage = styled.p`
color: red;
margin: 6px 0;
text-align: center;`



// input table component
class Table extends Component {
    constructor(){
        super()
        this.state = {
            Table: [],

            // the values of the input fields
            input: [{
                Col0:"",
                Col1:"",
                Col2:"",
                Col3:"",
            }],
            checked: [false]
        }
        this.addition=this.handleRows.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    // handleRows add and remove rows in the table when clicking on the add or remove button
    handleRows(event, method){
        if(method === "addition"){
                    this.setState({
                input: [...this.state.input, { 
                                                Col0:"",
                                                Col1:"",
                                                Col2:"",
                                                Col3:"",}],
                checked:[...this.state.checked, false]                          
            })
        }
        if(method === "deletion"){
            let newInput =[], newChecked = []
                newInput = this.state.input.filter((row,index) => !this.state.checked[index] )
                newChecked = this.state.checked.filter(checked => !checked)
                if(newInput.length === 0){
                    newInput = [{
                        Col0:"",
                        Col1:"",
                        Col2:"",
                        Col3:"",
                    }]
                }
                if(newChecked.length === 0){
                    newChecked = [false]
                }
                    this.setState({
                                    input: newInput,
                                    checked: newChecked
                    })
            this.props.form.setFieldValue('table', newInput)
        }
    }


    // control value of every input in the table
    handleChange(event) {
        let { name, value, type,checked } = event.target
        if(type === 'checkbox'){
            let parsedname = parseInt(name)
            let newCheckedArray = this.state.checked.map((cell,index) => {
                if(index !== parsedname)
                    return cell
                return checked
            })
            this.setState({
                checked: newCheckedArray
            })
        }
        else {
            // number is a regexp for extracting the numbers of col and row from the name
            let numberPattern = /\d+/g, row, col, propertyName
            // extract the number of the row and col
            row = name.match(numberPattern)[0]
            col = name.match(numberPattern)[1]
    
            if(!this.state.checked[row]){
                // store the target col
                propertyName= "Col" + col
                // copy the input 
                let newInput = [...this.state.input]
                // console.log({name,value,row,col,newInput,length: this.state.input.length});
                // console.log({oldValue:newInput[row][propertyName]});
                    newInput[row][propertyName] = value
                    this.setState({
                        input: newInput
                    }//, console.log({input: this.state.input})
                    )
                    this.props.form.setFieldValue('table', newInput)
            }
        }
    }    

    render(){
        let length=this.state.input.length
        // console.log({...this.props});
        
        let TableList = this.state.input.map((row,index) => {
            return (
                <tr key={index}>
                    <Td selected = {this.state.checked[index]}>{index +1}</Td>
                    <Td selected = {this.state.checked[index]}><Input name = {`Row${index}Col0`} type = "text" value = {row.Col0} onChange={this.handleChange} selected = {this.state.checked[index]} /> </Td>
                    <Td selected = {this.state.checked[index]}><Input name = {`Row${index}Col1`} type = "text" value = {row.Col1} onChange={this.handleChange} selected = {this.state.checked[index]} /> </Td>
                    <Td selected = {this.state.checked[index]}><Input name = {`Row${index}Col2`} type = "text" value = {row.Col2} onChange={this.handleChange} selected = {this.state.checked[index]} /> </Td>
                    <Td selected = {this.state.checked[index]}><Input name = {`Row${index}Col3`} type = "text" value = {row.Col3} onChange={this.handleChange} selected = {this.state.checked[index]} /> </Td>
                    <HiddenTd><label><Checkbox name = {index} checked = {this.state.checked[index]} onChange = {this.handleChange} border = {'darkred'}  {...this.props} /></label></HiddenTd>
                    {(index + 1) === length &&   <ImageContainer onClick = {(e) => this.handleRows(e,"addition")} >
        <Image src = {plus} alt="plus" title="הוספת שורה" />
    </ImageContainer>}
                </tr>
            )
        })
        return (

<Container>
  
<StyledTable>
            <thead>
                <tr>
                    <Th>שלב</Th>
                    <Th>תיאור המשימה בשלב זה</Th>
                    <Th>כ"א נדרש</Th>
                    <Th>כלים נדרשים</Th>
                    <Th>זמן להשלמה</Th>
                    <HiddenTh onClick = {(e) => this.handleRows(e,"deletion")} >
        <Image src = {Bin} alt = "delete" title = "מחיקה" />
</HiddenTh>
                </tr>
            </thead>
            <tbody {...this.props}>
                {TableList}
            </tbody>
        </StyledTable>
        {this.props.form.touched.table && this.props.form.errors.table && <StyledErrorMessage>{this.props.form.errors.table}</StyledErrorMessage>}
</Container>
        )
    }
} 

export default Table