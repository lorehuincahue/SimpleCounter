import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";


function SimpleCounter(props){
    return (<div className="General">
        <div className="reloj">
        <i className="fal fa-clock"></i>
        </div>
        <div className="seis">{props.digitoSeis%10}</div>
        <div className="cinco">{props.digitoCinco%10}</div>
        <div className="cuatro">{props.digitoCuatro%10}</div>
        <div className="tres">{props.digitoTres%10}</div>
        <div className="dos">{props.digitoDos%10}</div>
        <div className="uno">{props.digitoUno %10}</div>

    </div>);
}

SimpleCounter.propTypes={
    digitoSeis: PropTypes.number,
    digitoCinco: PropTypes.number,
    digitoCuatro: PropTypes.number,
    digitoTres: PropTypes.number,
    digitoDos: PropTypes.number,
    digitoUno: PropTypes.number
};

let counter=0;
setInterval(function(){
const seis=Math.floor(counter/100000);
const cinco=Math.floor(counter/10000);
const cuatro=Math.floor(counter/1000);
const tres=Math.floor(counter/100);
const dos=Math.floor(counter/10);
const uno=Math.floor(counter/1);

counter++;
ReactDOM.render(
<SimpleCounter digitoUno={uno} digitoDos={dos} digitoTres={tres} 
digitoCuatro={cuatro} digitoCinco={cinco} digitoSeis={seis} />, 
document.querySelector("#app")
);
},1000);