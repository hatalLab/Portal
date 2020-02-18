import React from 'react'
import Autosuggest from 'react-autosuggest'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import Icon from  '../../static/images/search.png'
import x from '../../static/css/AutoSoggestion.css'
import styled from 'styled-components'


const StyledContainer=styled.div`
border: 1px solid #DDD;
border-bottom: 2px solid #DDD;
  display: flex;
  width:30%;
  margin: 1px auto;
  padding: 0 5px;
  flex-direction: row;
  border-radius: 25px;
  direction: rtl;
  display: flex;
  justify-content: space-between;
`
const SuggestionContainer = styled(StyledContainer)`
  border: none;
  padding: 0;
  width: 28%;
`

const StyledInput = styled.input`
direction: rtl;
border: none;
outline: none;
margin-right: 20px;
spellcheck:false;
&& {
width: 90%;
}
&: focus {
  border: none;
  outline: none;
}
`
const InputContainer=styled.div`
  display: flex;
  justify-content: center;
`

const StyledImg=styled.img`
width:50px;
`

function shouldRenderSuggestions() {
  return true;
}

function renderSuggestionsContainer({ containerProps , children, query }) {
  containerProps.className += " Try"
 // console.log({...containerProps});
  
  return (
    <SuggestionContainer>
      <div {... containerProps} >
        {children}
      </div>
    </SuggestionContainer>
  );
}

const renderInputComponent = inputProps => (
  <StyledContainer className = "StyledContainer">
      <StyledInput spellCheck="false" {...inputProps} />
      <StyledImg className="search" src={Icon} alt="search" /> 
  </StyledContainer>
);

  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function getSuggestions(value, list) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return list;
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
    let newList =list.filter(language => regex.test(language.name));
    // newList.sort((a,b)=> b.year-a.year)
    return newList
  }
  
  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }
  
  function renderSuggestion(suggestion, { query }) {
    const matches =match(suggestion.name, query);
    const parts = parse(suggestion.name, matches);
  
    return (
      <span>
        {parts.map((part, index) => {
          const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;
  
          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
      </span>
    );
  }
  
  class Soggestion extends React.Component {
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: [],
        list:[],
        placeholder: ''
      };
      this.onSuggestionSelected=this.onSuggestionSelected.bind(this)
      this.onChange=this.onChange.bind(this)
      this.onSuggestionsClearRequested=this.onSuggestionsClearRequested.bind(this)  
      this.onSuggestionsFetchRequested=this.onSuggestionsFetchRequested.bind(this)
    }
  
    componentDidUpdate(prevProps, prevState, snapshot){
      if(this.state.list.length != prevProps.list.length){
       let newList =[],oldList =[...prevProps.list]
       for(let item of oldList){
         newList.push({name: item})
       }
       this.setState({
         list: [...newList],
         placeholder: this.props.placeholder
       }) 
      }
   
     }
 

     onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };

    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value,this.state.list)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }){	
      this.props.Handler(suggestionValue)	
      this.setState({value: ''})	
 }

    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: this.state.placeholder || "חפש",
        value,
        onChange: this.onChange,
        Handler:this.props.Handler
      };
      return (

        <Autosuggest 
          suggestions={suggestions}
          shouldRenderSuggestions = {shouldRenderSuggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderInputComponent={renderInputComponent}
          renderSuggestionsContainer = {renderSuggestionsContainer}
        />
      )
    }
  }
  
  export default Soggestion

  