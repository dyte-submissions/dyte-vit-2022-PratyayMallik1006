import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Output from './components/Output';
import {useEffect, useState, useRef } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef();
  
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <div className="App"
    onClick={e=>{inputRef.current.focus()}}>
    <Banner />
      <input 
        ref={inputRef}
        type="text"
        value={input}
        onChange={e=>setInput(e.target.value)} 
        onKeyDown={e=>{
          if(e.key == "Enter"){
            let newOutput = "";
            newOutput = output + "\n" + "$"+input+"\n";
            switch(input){
              case "help":
                newOutput +="'help'-To see available commands\n'about'- Applicant info\n'Try'-Check dependencies\n\n";
                break;
              case "about":
                newOutput +="Name: Pratyay Mallik\n University: VIT Vellore\n Registration No : 19BIT0004 \n Github: https://github.com/PratyayMallik1006 \n LinkedIn: https://www.linkedin.com/in/pratyay-mallik-0a866a192/ \n Resume:https://drive.google.com/file/d/1BpRaRMJ7Fg4Tzh2xB90YHhyKihXE1ir3/view?usp=sharing \n\n";
                break;
              default:
                newOutput +="Invalid input, try 'help' command";

            }
            setOutput(newOutput);
          }
        }}
        />
      <Output text={output}/>
    </div>
  );
}

export default App;
