/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import TagsInput from 'react-tagsinput'
import styled from 'styled-components'
import Autosuggest from 'react-autosuggest'
import AutoSuggestion from '../AutoSoggestion/autoSoggestion'
import './tags.css'
import '../../static/css/AutoSoggestion.css'
import Icon from '../../static/images/search.png'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'

const StyledContainer=styled.div`
border: 1px solid #DDD;
  display: flex;
  width:40%
  margin: 0 auto;
  padding: 0 5px;
  flex-direction: row;
  border-radius: 25px;
`
const StyledInput = styled.input`
direction: rtl;
border: none;
outline: none;
width: 90%;
margin-right: 5%;
&: focus {
  borser: none;
  outline: none;
}
`
const InputContainer=styled.div`
  display: flex;
  justify-content: center;
`

const StyledImg=styled.img`
height: 50px;
width:50px;
`
const StyledTagsContainer=styled.div`
  margin: 20px;
  direction: rtl;
  padding: 10px 0;
  text-align: start;
`


function RenderLayout (tagComponents, inputComponent) {
  return (
    <>
      {tagComponents}
      {inputComponent}
      </>
  )
}




function RenderSelectionTag (props) {
  let {tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other} = props
  return (
    <span key={key} {...other}  onClick={(e) => onRemove(key)}>
      {getTagDisplayValue(tag)}
      {!disabled &&
        <a className={classNameRemove} onClick={(e) => onRemove(key)} />
      }
    </span>
  )
}

class SelectionTags extends React.Component {
  constructor() { 
    super()
    this.state = {
      Tags: [],
      temporarySelected:[],
      SelectedTags: []
    }
   this.handleAllCategories=this.handleAllCategories.bind(this)
   this.handleSelectedCategories=this.handleSelectedCategories.bind(this)
   this.autosuggestRenderInput=this.autosuggestRenderInput.bind(this)
  }
  
  componentDidMount(){
    let tags =this.props.Tags.slice()
    let selectedTags=this.props.SelectedTags.slice()
    this.setState(
      {
        Tags:tags,
        SelectedTags:selectedTags
      }
    )
  }
 
  // remove category from all categories when a category selected and add it to selected tags and temporary

  handleAllCategories(tags, changed, changedIndexes) {
      changed = changed.toString()
      // copy SelectedTags and push the new selected tag
      let selectedtags = this.state.SelectedTags.slice()
      selectedtags.push(changed)
      // copy the new selected tag to temp in order to return that tag to tags when the user removes it from selected tags
      let temp = this.state.temporarySelected.slice()
      temp.push(changed.toString())
      // add the new tag to selected tags
      this.setState({
          Tags: tags,
          temporarySelected: temp,
          SelectedTags: selectedtags
      })
      this.props.form.setFieldValue(this.props.field.name, selectedtags)
}

      

// handle selected categories. add tags from inputת remove tags when clicked from selectedtags and add them to all categories if it was there before 

handleSelectedCategories(tags, changed, changedIndexes) {
    changed = changed.toString()
    // check if we need to add or remove tag from selectedtags. if method is true we need to remove
    let method = !tags.some(tag => tag === changed)
    // check if we already have tht tag in selected tags
    let isDuplicate = this.state.SelectedTags.some(tag => tag === changed)
    if (isDuplicate && !method) // if true that means we tries to add the same tag again
        return;
    let newTags = [],
        temp = [],
        selected_tags = [],
        existsInTags, existInTemp, IsNewTag
    // check if that tag exist in Tags and temp
    existsInTags = this.state.Tags.some(tag => tag === changed)
    existInTemp = this.state.temporarySelected.some(tag => tag === changed)
    IsNewTag = !existsInTags && !existInTemp // if it doesn't exist in 2 of them this is new tag
    if (method) {
        // that mean it doesn't exist in tags we need only to remove it from SelectedTags
        if (IsNewTag) {
            newTags = this.state.SelectedTags.filter(tag => tag !== changed)
            this.setState({
                SelectedTags: newTags
            })
            console.log({selected_tags});

            this.props.form.setFieldValue('categories',newTags)
        } else {
            //else it's old tag that mean it exists in temp. we need to remove from temp and selected tags and add it to tags
            newTags = this.state.Tags.slice()
            newTags.push(changed)
            temp = this.state.temporarySelected.filter(tag => tag !== changed)
            selected_tags = this.state.SelectedTags.filter(tag => tag !== changed)
            this.setState({
                Tags: newTags,
                temporarySelected: temp,
                SelectedTags: selected_tags
            })
            console.log({selected_tags});

            this.props.form.setFieldValue('categories', selected_tags)
        }
    } else { // if new tag selected
        // that means that the tag doesn't exist in Tags and we need only to add it to selected tags
        if (IsNewTag) {
            selected_tags = this.state.SelectedTags.slice()
            selected_tags.push(changed)
            this.setState({
                SelectedTags: selected_tags
            })
            console.log({selected_tags});

            this.props.form.setFieldValue('categories',selected_tags)
        } else { //if it's old tag we need to remove the tag from tags and add it to selectedtags and temp
            newTags = this.state.Tags.filter(tag => tag !== changed)
            temp = this.state.temporarySelected.slice()
            temp.push(changed)
            selected_tags = this.state.SelectedTags.slice()
            selected_tags.push(changed)
            this.setState({
                Tags: newTags,
                temporarySelected: temp,
                SelectedTags: selected_tags
            })
            this.props.form.setFieldValue('categories',selected_tags)
            console.log({selected_tags});
            
        }
  }
  }
 
  autosuggestRenderInput ({addTag, ...props}) {
    const handleOnChange = (e, {newValue, method}) => {
      if (method === 'enter') {
          e.preventDefault()
      } else {
          props.onChange(e)
      }
  }
 
  const inputValue = (props.value && props.value.trim().toLowerCase()) || ''
  const inputLength = inputValue.length
 
  // let suggestions = this.state.Tags.filter((state) => {
  //   return state.toLowerCase().slice(0, inputLength) === inputValue
  // })
  return (
    <InputContainer className="container">
    <AutoSuggestion list = {this.state.Tags} Handler={addTag} {...props} />
  </InputContainer>
)
}

  render() {
        return (
                <>
                <StyledTagsContainer>
                      {this.state.Tags.length > 0 && <p>כל הקטגוריות</p>}
                      <TagsInput 
                      value={this.state.Tags}
                      onChange={this.handleAllCategories}
                      renderTag={RenderSelectionTag} 
                      className = "allCategoriesSection" 
                      inputProps = {{className: 'allCategoriesInput',placeholder: ''}} 
                      tagProps={{className: 'react-tagsinput-tag edit-tag tag-label', classNameRemove: 'react-tagsinput-remove edit-tag'}}
                      renderLayout={RenderLayout}
                      />
                      {this.state.SelectedTags.length > 0 && <p>קטגוריות שנבחרו:</p>}
                      <TagsInput 
                      value={this.state.SelectedTags} 
                      onChange={this.handleSelectedCategories}
                      renderTag={RenderSelectionTag} 
                      renderInput={this.autosuggestRenderInput}
                      className ="add-category-section"
                      inputProps = {{className: 'selected-tag-input',placeholder: 'הוסף קטגוריה'}} 
                      tagProps={{className: 'react-tagsinput-tag selected-tag tag-label', classNameRemove: 'react-tagsinput-remove selected-tag'}} 
                      removeKeys={[]}
                      {...this.props}
                      />
                </StyledTagsContainer>
                </>
    )
  }
}


class ActiveTags extends React.Component {
    constructor() {
      super()
      this.state = {
          Tags: []
      }
      this.removeTags=this.removeTags.bind(this)
    }

    
    removeTags(tags,changed) {
        this.setState({
          Tags:  tags
        })
    }
   
    render() {
      return (
                  <StyledTagsContainer>
                    <TagsInput renderTag={RenderSelectionTag} className = "selected-tags" value={this.state.SelectedTags} onChange={this.removeTags} inputProps = {{className: 'selected-tags-input',placeholder: ''}} tagProps={{className: 'react-tagsinput-tag edit-tag tag-label', classNameRemove: 'react-tagsinput-remove edit-tag'}}/>
                  </StyledTagsContainer>
      )
    }
  }

export { SelectionTags, ActiveTags}
