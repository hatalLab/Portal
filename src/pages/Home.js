import React, {Component} from 'react'
import styled from 'styled-components'
import ModalPage from '../Components/Project_List/Modalpage'
import { data as projectsData, tags, favoriteTags as FavoriteTags, interestedProjects } from '../static/data/rowData'
import Comment from '../Components/Comments'


 // styled components

const StyledContainer = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    margin: 100px auto;
`;

const StyledList=styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    list-style-type: none;
    flex-direction: row-reverse;
    & > li {
        padding: 10px 5px;
        text-align: center;
    }
`;

const StyledFilterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 50px auto;
    width: 60vw;
`;

const StyledTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledTag = styled.a`
    padding: 20px 10px;

`
const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  dir:rtl;
  padding:10px 40px;
`;

const StyledCenteredRow=styled(StyledRow)`
    justify-content: center;
`
const StyledCol = styled.div`
display: flex;
flex-direction: column;
dir:rtl;
padding:10px;
& > input {
    width: 100px;
}
`;

const HomeContainer =styled.div`
direction: rtl;
`
class ControlledHomePage extends Component{  
    constructor(){
        super()
        this.state = {
    
            // CategoriesList contain all the tags
            categoriesList: [],
    
            // activeCategories contain all the selected categories
            activeCategories: [],
    
            // projectObject  contain list of objects each of them has the jsx element, categories and the user's level of interest in that project (based on the FavoriteTags).
            projectObject: [],
    
            // ShownProjectList contain only jsx elements that are shown on the screen
            ShownProjectList: [],
    
            // input contain the search field value
            input: ""
        }
        this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount(){
        let temp=[], numberOfProjects = projectsData.length, categories, interest, index, match

        // loop over each project in projectsData
        for(let project of projectsData)
        {            
            categories = project.categories
            interest = numberOfProjects
            
            // determining the user's level of interest in each project
            for (let category of categories)
            {     
                index = FavoriteTags.indexOf(category)
                if(index > -1 )
                {
                    // interested projects shown first, so interest of other projects is right after
                    interest = index + interestedProjects.length
                }
            }
            
            // set interest of interested project 
            for(let intersted of interestedProjects)
            {
                match = project.front_title.toString() === intersted
                if(match === true)
                {
                    index = interestedProjects.indexOf(project.front_title)
                    interest = index 
                    break
                }

            }
            
            temp.push(
            {
                project: <li className = {categories} id ="mix_target" key= {project.Project_id}>
                            <ModalPage  data={project}/>
                        </li>,
                categories: categories,
                name: project.front_title,
                interest: interest 
            }
            )
        }
        

        // sorting by interest key and creating a list of the elements
        let list = sortProjects(temp).map(item => item.project) 

        this.setState(
            {
                categoriesList: [...tags],
                activeCategories:[...tags],
                projectObject: temp,
                ShownProjectList: list
            }
        )
    }

    // handle change in the input field
    handleChange (event){
        event.preventDefault();
        const {name, value, type} = event.target
        if(type){
            this.setState({
                input:value
            },this.filter(value))
        } else {
            this.setState({
                activeCategories: name
            }, this.filter(name))
        }
    }

    // filter the shown project list
    filter = (value) => {
        let list=[]
        if(value === ""){
            list = sortProjects(this.state.projectObject.slice()).map(item => item.project) 
            this.setState(
                {
                    ShownProjectList: list
                }
            )
        } else {
            let newProjectObj = this.state.projectObject.filter(item => item.categories.findIndex(str => str === value) > -1)
            sortProjects(newProjectObj)
            list = newProjectObj.map(item => item.project)
            this.setState(
                {
                    ShownProjectList: list,
                }
            )
        }
    }



    render(){
        return(
            <HomeContainer>
            <StyledFilterContainer>
                <StyledCol>
                        <StyledCenteredRow>
                            <input name = "search" placeholder = "search category" value = {this.state.input} onChange = {this.handleChange} />
                        </StyledCenteredRow>
                    <StyledRow>
                        <FilterSection handleChange = {this.handleChange} />
                    </StyledRow>
                </StyledCol>
            </StyledFilterContainer>
            <StyledContainer id ="project_list" > {/*styled component */}
                <Comment>start of project list</Comment>
                <StyledList id="mix_wrapper"> {/*styled component */}
                    <Comment>Project List './src/Components/BindDataProject'</Comment>
                    {this.state.ShownProjectList} {/*project list */}
                </StyledList>
                <Comment>end of project list</Comment>
            </StyledContainer>
            </HomeContainer>
)
    }
}

const sortProjects = (obj) => {
    let list = obj.sort((item1, item2) => item1.interest - item2.interest)
    return list
}


const FilterSection = (props)=> {
    let tagsList = []
    for (let tag of tags){
        tagsList.push(<StyledTag onClick ={event => props.handleChange(event)} name = {tag} key={tag} href="#">{tag}</StyledTag>)
    }

    return (
        <>
            {tagsList}
        </>
    )
}


export default ControlledHomePage