import React from "react"
import Autosuggest from "react-autosuggest"
import parse from "autosuggest-highlight/parse"
import match from "autosuggest-highlight/match"
import Icon from '../../static/images/search.png'
import "../../static/css/AutoSoggestion.css"
import styled from "styled-components"

const StyledContainer = styled.div`
  border: 1px solid #ddd;
  border-bottom: 2px solid #ddd;
  display: flex;
  width: 30%;
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
  && {
    width: 90%;
  }
  &:focus {
    border: none;
    outline: none;
  }
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledImg = styled.img`
  width: 50px;
`

function shouldRenderSuggestions() {
  return true
}

function renderSuggestionsContainer({ containerProps, children, query }) {
  containerProps.className += " Try"
  console.log({ containerProps: containerProps })

  return (
    <SuggestionContainer>
      <div {...containerProps}>{children}</div>
    </SuggestionContainer>
  )
}

const renderInputComponent = inputProps => (
  <StyledContainer className="StyledContainer">
    <StyledInput spellCheck="false" {...inputProps} />
    <StyledImg className="search" src={Icon} alt="search" />
  </StyledContainer>
)

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function getSuggestions(value, list, categories, creators) {
  console.log("List: ", list, value)
  console.log("get suggestion", { categories, creators })
  const escapedValue = escapeRegexCharacters(value.trim())

  if (escapedValue === "") {
    console.log("escaped", list)
    let newList = list.map(project => {
      return {
        found: project.front_title
      }
    })
    console.log(newList)
    return newList
  }
  const regex = new RegExp("^" + escapedValue, "i")
  let newList = list.map(project => {
    if (regex.test(project.front_title)) {
      return {
        project: project,
        found: project.front_title,
        details: "title"
      }
    } else return { details: "not found" }
  })
  let matchedCategories = [],
    matchedCreators = []
  for (let category of categories) {
    if (regex.test(category)) {
      matchedCategories.push({
        found: category,
        details: "category"
      })
    }
  }
  for (let creator of creators) {
    if (regex.test(creator.name)) {
      matchedCreators.push({
        found: creator.name,
        details: "creator name"
      })
    } else if (regex.test(creator.id)) {
      matchedCreators.push({
        found: creator.id,
        details: "creator id"
      })
    }
  }
  console.log({ matchedCategories, matchedCreators })
  let filteredList = newList.filter(item => item.details !== "not found")
  // newList.sort((a,b)=> b.year-a.year)
  let suggestionList = matchedCategories.concat(filteredList, matchedCreators)
  console.log({ suggestionList })
  return suggestionList
}

function getSuggestionValue(suggestion) {
  return suggestion.found
}

function renderSuggestion(suggestion, { query }) {
  const matches = match(suggestion.found, query)
  const parts = parse(suggestion.found, matches)

  return (
    <span>
      {parts.map((part, index) => {
        const className = part.highlight
          ? "react-autosuggest__suggestion-match"
          : null

        return (
          <span className={className} key={index}>
            {part.text}
          </span>
        )
      })}
    </span>
  )
}

class Soggestion extends React.Component {
  constructor() {
    super()

    this.state = {
      value: "",
      suggestions: [],
      list: [],
      categories: [],
      creators: [],
      placeholder: ""
    }
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    )
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.list.length !== prevProps.list.length) {
      console.log({ "prevProps.list": prevProps.list })
      let categories = prevProps.categories

      let creators = prevProps.list.map(project => project.contact)
      let unique = creators.filter(
        (value, index, self) =>
          self.findIndex(item => item.id === value.id) === index
      )
      //console.log({ unique })

      console.log({ categories, unique })
      this.setState({
        list: [...prevProps.list],
        categories: categories,
        creators: unique,
        placeholder: this.props.placeholder
      })
    }
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(
        value,
        this.state.list,
        this.state.categories,
        this.state.creators
      )
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  onSuggestionSelected(
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) {
    this.props.Handler(suggestionValue)
    this.setState({ value: "" })
  }

  render() {
    const { value, suggestions } = this.state
    console.log({ Suggestion: suggestions })
    const inputProps = {
      placeholder: this.state.placeholder || "חפש",
      value,
      onChange: this.onChange,
      Handler: this.props.Handler
    }
    return (
      <Autosuggest
        suggestions={suggestions}
        shouldRenderSuggestions={shouldRenderSuggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
        renderSuggestionsContainer={renderSuggestionsContainer}
      />
    )
  }
}

export default Soggestion
