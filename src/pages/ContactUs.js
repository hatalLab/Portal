import React from 'react'
import {
    AwesomeButton,
  } from "react-awesome-button"
  import "react-awesome-button/src/styles/themes/theme-c137"
  import { useHistory } from "react-router-dom";

  function HomeButton() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/some-url");
    }
  
    return (
      <AwesomeButton type="primary" onPress={handleClick}>
        Go home
      </AwesomeButton>
    );
  }



export default HomeButton