/* eslint no-eval:0*/
import React from "react";
import Buttons from "./Buttons";
import "./App.css"
class App extends React.Component
{

  constructor()
  {
    super()
    this.state={
      out:"0"
    }
    this.link=React.createRef()
  }

  Element(value){
    let currentValue=value
    let output=this.link.current

    this.setState({
      out:currentValue
    })
  
    if (output.value === '0') {
      output.value = ''
    }
    output.value +=currentValue
  } 

  Operat(value){
    let output=this.link.current 
    if(value==='CE'){
      output.value.length === 1 ? output.value = '0':output.value=output.value.substring(0,output.value.length-1) 
    }
    else if(value==='C') {output.value='0'}
    else if(value==='=') {
    try {output.value=eval(output.value)}
      catch{
        output.value='Недопустимое значение'
        setTimeout(()=>{
          output.value='0'}, 1000)
      }
    }
  }
  render() {
    return(
      <div className="calc">
        <div className="outp">
      <input ref={this.link} type={"text"} defaultValue={this.state.out}/>
    </div>
       <div className="buttons">
        {Buttons.button.map((item,index) =><button
         key={index}
          onClick={()=>{this.Element(item.val)}}> 
          {item.val}</button>)}
        {Buttons.operation.map((item,index) =><button
        key={index}
         onClick={()=>{this.Operat(item.val)}}> {item.val}</button>)}
       </div>
    </div>
         );
  }

}
export default App