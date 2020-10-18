import React from "react";

export default function Element(props){
    if (props.e){
    let elArray = []
    console.log(props.e)
    for (var i = 0; i < props.e.length; i++){
        elArray.push(
            <center key={props.e[i]}>
                <div className='element'>{props.e[i]}
                    <img className='tick' src='https://www.symbols.com/images/symbol/1/2320_check-mark.png' onClick={() => props.strike(i)} alt=""/>
                    <img className='wastebasket' src='https://image.freepik.com/free-vector/illustration-trash-bin-icon_53876-5598.jpg' onClick={() => props.delete(i)} alt=""/>
                </div>
            </center>
        )
    }
    return (
        elArray
    )
    } else {
        return(null)
    }
}