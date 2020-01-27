import React from 'react'
import Autosuggest from 'react-autosuggest'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import Icon from './search.png'
import './AutoSoggestion.css'
import styled from 'styled-components'


const StyledContainer=styled.div`
border: 1px solid #DDD;
  display: flex;
  width:300px;
  padding: 0 30px;
  flex-direction: row;
  border-radius: 25px;
`

const StyledInput = styled.input`
border: none;
`

const StyledImg=styled.img`
cursor: pointer;
height: 50px;
width:50px;
`

const renderInputComponent = inputProps => (
  <StyledContainer>
    <StyledImg className="search" src={Icon} onClick={() => inputProps.Handler(inputProps.value)
    } alt="search" /> 
    <StyledInput {...inputProps} />
  </StyledContainer>
)

  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function getSuggestions(value, list) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
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
        list:[]
      };    
    }
  
    componentDidMount(){
      this.setState({
        list: [...this.props.list]
      })
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
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "type 'c'",
        value,
        onChange: this.onChange,
        Handler:this.props.Handler
      };
      // {/* <img className="abcd" src={Icon} alt="adsaad" /> */}
  
      return (

        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderInputComponent={renderInputComponent}
        />
      )
    }
  }
  
  export default Soggestion