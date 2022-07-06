import React from "react";

const Scroll = (props) => {
  console.log(props);
  return (
    // Double curly brakets: (1) is a JS expression, (2) is returning an object
    <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>  
        {props.children}
    </div>
  )
};

export default Scroll;
