import React from 'react'
import {
    AwesomeButton,
    AwesomeButtonProgress,
  } from "react-awesome-button"
  import "react-awesome-button/src/styles/themes/theme-c137";

function MyProject(){
    return (
        <div>
        <AwesomeButton type="secondary" >
                    סגירה 
                </AwesomeButton>
                    <AwesomeButtonProgress
                       
                        type="primary"
                        size="medium"
                        resultLabel="נשלח!"
                        releaseDelay={600}
                        ripple={true}
                        onPress={(element, next) => {
                        setTimeout(() => {
                            next();
                        }, 600);
                        }}
                            >
                        להצטרפות
                    </AwesomeButtonProgress>
        </div>
    )
}

export default MyProject