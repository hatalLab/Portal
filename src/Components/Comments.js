import React, {useEffect, useRef} from 'react'

//this function is to write comments that react would render into the html

const Comments = ( props ) => {
    const el = useRef();
    useEffect( () => {
        el.current.outerHTML = `<!-- ${props.text || props.children} -->`;
    }, [] );
    return (
        <div ref={el}/>
    );
};

export default Comments 