import React from 'react'
import styled from 'styled-components'
import ModalPage from './Modalpage'
import Comment from '../Comments'
import Data from '../../static/data/DataBase'

//styled components
const Container = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    margin: 100px auto;
`;

const List=styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    list-style-type: none;
`;

const Item = styled.li`
padding: 10px 5px;
text-align: center;
`;

function BindProjectList(){
let list=[];    //list will hold all the project list
for(let i=0;i<100;i++){
    list.push(<Item className={Data[0].categories.toString().replace(',',' ')} id ="mix_target" key= {i}><ModalPage  data={Data[0]}/></Item>)
}
//console.log(Data[0].categories.toString().replace(',',' '));

    return (
        <>
            <Container id ="project_list" > {/*styled component */}
                <Comment>start of project list</Comment>
                <List id="mix_wrapper"> {/*styled component */}
                    <Comment>Project List './src/Components/BindDataProject'</Comment>
                    {list} {/*project list */}
                </List>
                <Comment>end of project list</Comment>
            </Container>
            
        </>
    )
}

export default BindProjectList