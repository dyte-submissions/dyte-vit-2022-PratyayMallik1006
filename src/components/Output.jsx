import React from "react";

function Output(props){
    return(<div className="terminal">
    {props.text}
  </div>);
}

export default Output;