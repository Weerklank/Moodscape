import React, {useState} from "react";
import "../utils/css/style.css";
import "../utils/css/reminders.css";
import { Body } from "../components/Background";
import Element  from "../components/Element.js"
let elements = [];


function Reminders(){
    const [reminder, setReminder] = useState('')
    const [elementsLog, setElementsLog] = useState('')

    function textInput(event) {
        const value  = event.target.value;
        setReminder(value)
      };

    function addElement() {
        elements.push(reminder)
        console.log(elements)
        setElementsLog(elements)
        console.log(elementsLog)
    }

    function del(index) {
        elements.splice(index, 1);
    }
    
    function strike(index) {
        if(elements[index].includes("<strike>")){
        elements[index] = elements[index].replace("<strike>" , "")
        elements[index] = elements[index].replace("</strike>" , "")
    } else {elements[index] = "<strike>"+elements+"</strike>"}
    }

    return (
        <Body>
        <div className="container">
            <input type="text" className="addTxt" placeholder="Today's Goals . . ." onChange={textInput}/>
            <button className="addBtn" onClick={() => {addElement()}}>
                <img src="https://picaflor-azul.com/images/plus-circle1.png" alt=""/>
            </button>
        <div className="list">
            <Element e={elementsLog} strike={strike} delete={del}></Element>
        </div>
        </div>
        </Body>
    )
}

export default Reminders