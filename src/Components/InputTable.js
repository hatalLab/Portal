import React, {Component} from 'react'
import styled from 'styled-components'


const StyledTable =styled.table`
border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
`
// const Td=styled.td`
// border: 1px solid black;
//   border-collapse: collapse;
//   padding: 10px;
// `
const Th= styled.th`
border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
`


class Table extends Component {
    constructor(){
        super()
        this.state = {
            Table: []
        }
    }

    render(){
        return (
<>
<StyledTable>
            <thead>
                <tr>
                    <Th>תיאור המשימה בשלב זה</Th>
                    <Th>כ"א נדרש</Th>
                    <Th>כלים נדרשים</Th>
                    <Th>זמן להשלמה</Th>
                </tr>
            </thead>
        </StyledTable>
</>

        )
    }
} 

export default Table